import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.8.212"],
  reactCompiler: true,

  images: {
    remotePatterns: [{ protocol: "https", hostname: "i.ytimg.com" }],

    // AVIF first: typically 20-30% smaller than WebP at equal quality.
    // Next negotiates per-request via Accept, so WebP remains the fallback.
    formats: ["image/avif", "image/webp"],

    // Default deviceSizes includes 16 breakpoints, so Next generates candidates
    // far wider than this layout ever uses (hero caps at 46vw on desktop).
    // Trimming the list keeps srcset honest and avoids the browser picking an
    // oversized candidate on mid-DPR phones.
    deviceSizes: [360, 420, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [64, 96, 128, 256, 384],

    // Cache optimized derivatives for 30 days instead of the 60s default.
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },

  // Ship smaller HTML/JS.
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,

  async headers() {
    const immutable = "public, max-age=31536000, immutable";
    return [
      {
        // Hashed build output is content-addressed, so it is safe to pin forever.
        source: "/_next/static/:path*",
        headers: [{ key: "Cache-Control", value: immutable }],
      },
      {
        // Static art directed assets. Filenames are stable, so use a long
        // max-age with revalidation rather than true immutability.
        source: "/:all*(webp|avif|png|jpg|jpeg|svg|ico)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" },
        ],
      },
    ];
  },
};

export default nextConfig;
