import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import EngagementTracker from "@/components/EngagementTracker";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
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

        {/* GTM via @next/third-parties - uses web worker, no main-thread blocking */}
        <GoogleTagManager gtmId={ANALYTICS.GTM_ID} />

        {/* Bounce + dwell-time tracking (mounted after GTM so dataLayer exists) */}
        <EngagementTracker />

        {/* Facebook Pixel - deferred via requestIdleCallback pattern */}
        <Script id="fb-pixel" strategy="lazyOnload">
          {`(function(){if(window._fbPixelInit)return;window._fbPixelInit=true;var f=document.createElement('script');f.async=true;f.src='https://connect.facebook.net/en_US/fbevents.js';document.head.appendChild(f);f.onload=function(){fbq('init','${ANALYTICS.FACEBOOK_PIXEL_ID}');fbq('track','PageView');}})();`}
        </Script>

        {/* Microsoft Clarity - lazyOnload so it never blocks paint */}
        <Script id="clarity" strategy="lazyOnload">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${ANALYTICS.CLARITY_ID}");`}
        </Script>

        {/* Zoho SalesIQ - lowest priority, loads after everything */}
        <Script id="zoho-salesiq" strategy="lazyOnload">
          {`setTimeout(function(){var $zoho=$zoho||{};$zoho.salesiq=$zoho.salesiq||{widgetcode:"${ANALYTICS.ZOHO_WIDGET_CODE}",values:{},ready:function(){}};var d=document;var s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zohopublic.com/widget";var t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);},3000);`}
        </Script>
      </body>
    </html>
  );
}
