import type { Metadata } from "next";
import localFont from "next/font/local";
import EngagementTracker from "@/components/EngagementTracker";
import ThirdPartyScripts from "@/components/ThirdPartyScripts";
import "./globals.css";

/*
  Self-hosted rather than next/font/google. The Google loader fetches the woff2
  files over the network at build time, which makes the build non-deterministic:
  a throttled or rate-limited response fails the whole build with
  "Can't resolve '@vercel/turbopack-next/internal/font/google/font'".
  These are the same latin-subset files Google serves, committed to the repo.
  Both faces are variable, so one file covers the full weight range each.
*/
const plusJakarta = localFont({
  src: "./fonts/plus-jakarta-sans-latin.woff2",
  variable: "--font-jakarta",
  weight: "400 700",
  style: "normal",
  // "optional" instead of "swap": swap paints fallback text, then repaints when
  // the real font arrives, and that late repaint is a visual change Speed Index
  // penalises. "optional" gives the font a short window and keeps the fallback
  // for that pageview if it misses, so the final visual state is reached on the
  // first frame. Now same-origin and preloaded, so the real font nearly always
  // wins. Switch to "swap" if brand type on first paint matters more.
  display: "optional",
  preload: true,
  adjustFontFallback: "Arial",
  fallback: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
});

const spaceGrotesk = localFont({
  src: "./fonts/space-grotesk-latin.woff2",
  variable: "--font-space",
  // Headings only. 700 is Space Grotesk's ceiling; `font-extrabold` in the
  // markup synthesises from this rather than downloading anything heavier.
  weight: "500 700",
  style: "normal",
  display: "optional",
  preload: true,
  adjustFontFallback: "Arial",
  fallback: ["ui-sans-serif", "system-ui", "Avenir Next", "Segoe UI", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Trusted & Recommended Online School in UAE | International Schooling",
  description:
    "Trusted & Recommended online school in UAE offering the American Curriculum for KG - Grade 12. Triple-accredited by NEASC, WASC & Cognia. Enroll now.",
  robots: "index, follow",
  openGraph: {
    title: "Trusted & Recommended Online School in UAE | International Schooling",
    description:
      "Trusted & Recommended online school in UAE offering the American Curriculum for KG - Grade 12. Triple-accredited by NEASC, WASC & Cognia.",
    images: [{ url: "/og/uae.jpg", width: 1200, height: 630 }],
  },
};

/* Vendor IDs live in ThirdPartyScripts, which is what actually loads them. */

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${spaceGrotesk.variable} h-full`}
    >
      <head>
        {/*
          React 19 treats `<script async src>` as a hoistable resource it can
          execute itself, unlike next/script's beforeInteractive, which emits a
          raw script element that React then warns about on client render.
        */}
        <script async src="/engage.js" />
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased">
        {children}

        {/* GTM, Meta Pixel, Clarity and Zoho load on first interaction or after
            an idle fallback. See ThirdPartyScripts for the reasoning: together
            they are ~275KB+ of gzipped JS and were the dominant TBT cost. */}
        <ThirdPartyScripts />

        {/* Bounce + dwell tracking. Independent of the above - the inline
            snippet in <head> owns exits via sendBeacon, so bounce data survives
            even when no vendor script ever loads. */}
        <EngagementTracker />
      </body>
    </html>
  );
}
