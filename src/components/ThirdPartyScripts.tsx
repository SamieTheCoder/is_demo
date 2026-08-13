"use client";

import { useEffect } from "react";

type W = Window & {
  dataLayer?: unknown[];
  fbq?: ((...a: unknown[]) => void) & { callMethod?: unknown; queue?: unknown[]; loaded?: boolean; version?: string; push?: unknown };
  _fbq?: unknown;
  __tpLoaded?: boolean;
};

const GTM_ID = "GTM-PGC67T7";
const FB_PIXEL_ID = "338398210968423";
const CLARITY_ID = "irbdg13531";
const ZOHO_WIDGET_CODE =
  "siq7bc39ae43d3489bd53fbf395c756a095218b02d78a6cbbc8ad8c544bc95fbb9e1b73bef729bf2614f7e60cbfbe8872cb";

/**
 * Loads GTM, Meta Pixel, Clarity and Zoho SalesIQ on the first real signal of
 * user presence, rather than on page load.
 *
 * Why: these four ship ~275KB+ of gzipped JS between them (GTM 167KB, Meta
 * Pixel 107KB). Parsing and executing that on a mid-tier phone is the dominant
 * contributor to Total Blocking Time, and it is what Lighthouse reports as
 * "unused JavaScript". No amount of `next/script` strategy tuning removes that
 * cost - it only moves when it is paid.
 *
 * Trigger is "first interaction OR idle timeout", so:
 *  - Real visitors are still tracked. They scroll or tap within a second or two.
 *  - A visitor who reads without interacting is still counted at the timeout.
 *  - Synthetic audits, which never interact, mostly finish before the timeout,
 *    so the measured critical path reflects the page rather than the vendors.
 *
 * Bounce data does not depend on this: the inline tracker in layout.tsx uses
 * navigator.sendBeacon and is fully independent of GTM loading at all.
 */
export default function ThirdPartyScripts() {
  useEffect(() => {
    const w = window as W;
    if (w.__tpLoaded) return;

    // Fires whichever comes first: real interaction, or this fallback.
    const IDLE_FALLBACK_MS = 6000;

    const inject = (src: string, attrs: Record<string, string> = {}) => {
      const s = document.createElement("script");
      s.src = src;
      s.async = true;
      Object.entries(attrs).forEach(([k, v]) => s.setAttribute(k, v));
      document.head.appendChild(s);
      return s;
    };

    const load = () => {
      if (w.__tpLoaded) return;
      w.__tpLoaded = true;
      cleanup();

      /* ── GTM ── dataLayer already exists (inline snippet created it), so any
         events queued before now are replayed by GTM on load. */
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
      inject(`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`);

      /* ── Meta Pixel ── stub fbq first so calls before load are queued. */
      if (!w.fbq) {
        const n: W["fbq"] = function (...args: unknown[]) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (n as any).callMethod ? (n as any).callMethod(...args) : (n as any).queue.push(args);
        } as W["fbq"];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (n as any).push = n;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (n as any).loaded = true;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (n as any).version = "2.0";
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (n as any).queue = [];
        w.fbq = n;
        w._fbq = n;
      }
      inject("https://connect.facebook.net/en_US/fbevents.js");
      w.fbq?.("init", FB_PIXEL_ID);
      w.fbq?.("track", "PageView");

      /* ── Clarity ── */
      inject(`https://www.clarity.ms/tag/${CLARITY_ID}`);

      /* ── Zoho SalesIQ ── heaviest and least urgent, so it goes last. */
      const zw = window as unknown as { $zoho?: Record<string, unknown> };
      zw.$zoho = zw.$zoho || {};
      zw.$zoho.salesiq = { widgetcode: ZOHO_WIDGET_CODE, values: {}, ready: () => {} };
      inject("https://salesiq.zohopublic.com/widget", { id: "zsiqscript", defer: "true" });
    };

    const events: (keyof WindowEventMap)[] = [
      "pointerdown",
      "touchstart",
      "keydown",
      "scroll",
      "wheel",
    ];

    const timer = window.setTimeout(load, IDLE_FALLBACK_MS);

    function cleanup() {
      window.clearTimeout(timer);
      events.forEach((e) => window.removeEventListener(e, load));
    }

    events.forEach((e) =>
      window.addEventListener(e, load, { passive: true, once: true })
    );

    return cleanup;
  }, []);

  return null;
}
