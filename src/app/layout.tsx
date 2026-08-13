import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import Script from "next/script";
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
        {/* Preconnect to analytics domains for faster loading */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />

        {/* Google Tag Manager - head snippet */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${ANALYTICS.GTM_ID}');`}
        </Script>

        {/* Facebook Pixel */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          if(!window._fbPixelInit){window._fbPixelInit=true;fbq('init', '${ANALYTICS.FACEBOOK_PIXEL_ID}');}
          fbq('track', 'PageView');`}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${ANALYTICS.CLARITY_ID}");`}
        </Script>

        {/* Zoho SalesIQ Widget */}
        <Script id="zoho-salesiq" strategy="lazyOnload">
          {`var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode: "${ANALYTICS.ZOHO_WIDGET_CODE}", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zohopublic.com/widget";var t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);`}
        </Script>
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased">
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${ANALYTICS.GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
