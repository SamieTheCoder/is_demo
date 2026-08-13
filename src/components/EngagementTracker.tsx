"use client";

import { useEffect } from "react";

type TrackerWindow = Window & {
  dataLayer?: Record<string, unknown>[];
  fbq?: (...args: unknown[]) => void;
  clarity?: (...args: unknown[]) => void;
  /** Set by the inline snippet in layout.tsx at HTML-parse time. */
  __isEngStart?: number;
  __isEngScroll?: () => number;
};

/**
 * Dwell-time milestones only.
 *
 * Exit tracking (engagement_exit / engagement_bounce / engagement_quick_exit)
 * is owned by the inline snippet in layout.tsx, which runs before hydration so
 * it can catch sub-1s bounces. Do not duplicate that logic here or events will
 * fire twice.
 *
 * Timings are measured from the inline snippet's t0, not from mount, so a slow
 * hydration does not inflate the reported dwell.
 */
export default function EngagementTracker() {
  useEffect(() => {
    const w = window as TrackerWindow;

    // Real page start, set during HTML parse. Fall back to now if absent.
    const t0 = w.__isEngStart ?? Date.now();
    const elapsed = Date.now() - t0;

    const push = (event: string) => {
      w.dataLayer?.push({
        event,
        dwell_ms: Date.now() - t0,
        scroll_depth_pct: w.__isEngScroll?.() ?? 0,
      });
    };

    const milestones: { at: number; event: string }[] = [
      { at: 3000, event: "engagement_3s" },
      { at: 10000, event: "engagement_10s" },
      { at: 30000, event: "engagement_30s" },
      { at: 60000, event: "engagement_60s" },
    ];

    const timers = milestones.map(({ at, event }) =>
      // Subtract time already spent so milestones land at true dwell, not mount + at.
      window.setTimeout(() => {
        push(event);
        if (event === "engagement_30s") {
          // 30s on a landing page is a genuinely engaged visitor
          w.fbq?.("trackCustom", "EngagedVisitor", { dwell_seconds: 30 });
          w.clarity?.("set", "engagement", "engaged_30s");
        }
      }, Math.max(0, at - elapsed))
    );

    return () => timers.forEach(window.clearTimeout);
  }, []);

  return null;
}
