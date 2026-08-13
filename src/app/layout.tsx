import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import EngagementTracker from "@/components/EngagementTracker";
import ThirdPartyScripts from "@/components/ThirdPartyScripts";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  // "optional" instead of "swap": swap paints fallback text, then repaints when
  // the real font arrives. That late repaint is a visual change Speed Index
  // penalises. "optional" gives the font a short window and, if it misses,
  // keeps the fallback for that pageview - so the final visual state is reached
  // on the first frame. Fonts are same-origin and preloaded, so on a normal
  // connection the real font still wins the race; it is mainly throttled
  // first-visits that see the fallback. Revert to "swap" if brand type on first
  // paint matters more than the metric.
  display: "optional",
  weight: ["400", "500", "600", "700"],
  preload: true,
  adjustFontFallback: true,
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "optional",
  // Headings only. 700 is Space Grotesk's ceiling; `font-extrabold` in the
  // markup synthesises from this rather than downloading anything heavier.
  weight: ["500", "700"],
  preload: true,
  adjustFontFallback: true,
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

/* Analytics config */
const ANALYTICS = {
  GTM_ID: "GTM-PGC67T7",
  FACEBOOK_PIXEL_ID: "338398210968423",
  CLARITY_ID: "irbdg13531",
  ZOHO_WIDGET_CODE:
    "siq7bc39ae43d3489bd53fbf395c756a095218b02d78a6cbbc8ad8c544bc95fbb9e1b73bef729bf2614f7e60cbfbe8872cb",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${spaceGrotesk.variable} h-full`}
    >
      <head>
        {/*
          Zero-delay exit tracking.
          Inline + no src, so it executes during HTML parse - before React hydrates.
          This is the only way to catch a sub-1s bounce: a client component would
          still be waiting on hydration while the visitor is already gone.
          Owns exit events entirely; EngagementTracker only adds dwell milestones.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){if(window.__isEng)return;window.__isEng=1;
var t0=Date.now(),maxS=0,sent=0,rp=0;window.dataLayer=window.dataLayer||[];window.__isEngStart=t0;
addEventListener('scroll',function(){if(rp)return;rp=1;requestAnimationFrame(function(){var d=document.documentElement,s=d.scrollHeight-innerHeight,p=s>0?Math.round(scrollY/s*100):0;if(p>maxS)maxS=p>100?100:p;rp=0;});},{passive:true});
window.__isEngScroll=function(){return maxS};
function ex(){if(sent)return;sent=1;var ms=Date.now()-t0;
var q=ms<1000?'bounce_under_1s':ms<5000?'quick_exit_under_5s':ms<30000?'browsed':'engaged';
var m={dwell_ms:ms,dwell_seconds:Math.round(ms/1000),scroll_depth_pct:maxS,exit_quality:q,reached_form:maxS>25};
dataLayer.push(Object.assign({event:'engagement_exit'},m));
if(ms<1000)dataLayer.push(Object.assign({event:'engagement_bounce'},m));
else if(ms<5000)dataLayer.push(Object.assign({event:'engagement_quick_exit'},m));
if(navigator.sendBeacon){try{navigator.sendBeacon('/api/engagement',JSON.stringify(Object.assign({event:'engagement_exit'},m)))}catch(e){}}}
addEventListener('pagehide',ex);
document.addEventListener('visibilitychange',function(){if(document.visibilityState==='hidden')ex()});})();`,
          }}
        />
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
