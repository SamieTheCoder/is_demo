import { NextRequest } from "next/server";

type EngagementPayload = {
  event?: string;
  dwell_ms?: number;
  dwell_seconds?: number;
  scroll_depth_pct?: number;
  exit_quality?: string;
  reached_form?: boolean;
};

/**
 * Receives engagement beacons from EngagementTracker.
 * Currently logs; swap the console.log for your warehouse / CRM call.
 * Returns 204 so sendBeacon never retries.
 */
export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as EngagementPayload;

    const record = {
      quality: body.exit_quality ?? "unknown",
      dwell_seconds: body.dwell_seconds ?? 0,
      scroll_depth_pct: body.scroll_depth_pct ?? 0,
      reached_form: body.reached_form ?? false,
      referer: req.headers.get("referer") ?? "direct",
      ua: req.headers.get("user-agent") ?? "unknown",
      country: req.headers.get("x-vercel-ip-country") ?? "unknown",
      at: new Date().toISOString(),
    };

    // Replace with a real sink (BigQuery, Supabase, CRM webhook, etc.)
    console.log("[engagement]", JSON.stringify(record));
  } catch {
    // Malformed beacon: swallow it, never surface an error to the client
  }

  return new Response(null, { status: 204 });
}
