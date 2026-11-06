const path = require("path");

// Old URLs (renamed blog slugs / old routes) that Google still has on file.
const legacyRedirects = {
  "/photobooth-hire-melbourne": "/photoboothhiremelbourne",
  "/blog/blog-post-christmasprops": "/blog/top-10-props",
  "/blog/christmas-photo-booth-ideas-melbourne-2025": "/blog/top-10-props",
  "/blog/blog-post-corporate": "/blog/corporate-event-trends",
  "/blog/corporate-event-photo-booth-trends-melbourne": "/blog/corporate-event-trends",
  "/blog/blog-post-photobooth-cost": "/blog/photobooth-cost-australia",
  "/blog/photo-booth-cost-australia-2025": "/blog/photobooth-cost-australia",
  "/blog/blog-post-photoboothtrends": "/blog/photo-booth-trends-melbourne-2025",
  "/blog/blog-post-weddingphotobooth": "/blog/wedding-photo-booth-ideas",
  "/blog/wedding-photo-booth-ideas-melbourne": "/blog/wedding-photo-booth-ideas",
  "/blog/book-us-for-christmas-2025": "/blog/christmas-hire",
  "/blog/top-5-reasons-to-hire-photo-booth-melbourne": "/blog/photobooth-benefits",
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  outputFileTracingRoot: path.join(__dirname),
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    const isProd = process.env.NODE_ENV === "production";

    const csp = [
      "default-src 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      "frame-ancestors 'none'",
      "img-src 'self' data: blob: https:",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://widgets.sociablekit.com",
      "font-src 'self' data: https:",
      "manifest-src 'self'",
      "worker-src 'self' blob:",
      // Google tag (Ads + GA4) — https://developers.google.com/tag-platform/security/guides/csp
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://googleads.g.doubleclick.net https://www.googleadservices.com https://www.google.com https://widgets.sociablekit.com https://js.stripe.com",
      // SociableKit Google Reviews widget loads its feed from accentapi.com and its CSS via fetch
      "connect-src 'self' https://*.google-analytics.com https://analytics.google.com https://*.analytics.google.com https://www.googletagmanager.com https://www.google.com https://www.googleadservices.com https://*.g.doubleclick.net https://ad.doubleclick.net https://data.accentapi.com https://api.accentapi.com https://*.sociablekit.com",
      "frame-src https://www.google.com https://td.doubleclick.net https://www.googletagmanager.com https://js.stripe.com",
      "upgrade-insecure-requests",
    ]
      .join("; ")
      .trim();

    const headers = [
      {
        source: "/_next/static/(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/images/(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=604800" }],
      },
    ];

    if (isProd) {
      headers.unshift({
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "geolocation=(), camera=(), microphone=(), payment=(), usb=(), interest-cohort=()",
          },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
        ],
      });
    }

    return headers;
  },
  async redirects() {
    return [
      ...Object.entries(legacyRedirects).map(([source, destination]) => ({
        source,
        destination,
        permanent: true,
      })),
      {
        // Thin duplicate of /photoboothhiremelbourne — consolidate ranking signals
        source: "/pbseopage",
        destination: "/photoboothhiremelbourne",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "photoboothwithshan.com.au",
          },
        ],
        destination: "https://www.photoboothwithshan.com.au/:path*",
        permanent: true,
      },
    ];
  },
  webpack(config) {
    const hasSpeedInsights = (() => {
      try {
        require.resolve("@vercel/speed-insights/next");
        return true;
      } catch {
        return false;
      }
    })();

    const hasAnalytics = (() => {
      try {
        require.resolve("@vercel/analytics/next");
        return true;
      } catch {
        return false;
      }
    })();

    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      ...(hasSpeedInsights
        ? {}
        : {
            "@vercel/speed-insights/next": path.join(
              __dirname,
              "src/stubs/vercel-speed-insights-next.js",
            ),
          }),
      ...(hasAnalytics
        ? {}
        : {
            "@vercel/analytics/next": path.join(__dirname, "src/stubs/vercel-analytics-next.js"),
          }),
    };

    config.module.rules.push({
      test: /\.(png|jpe?g|gif|webp|svg|mp4|webm)$/i,
      type: "asset/resource",
    });
    return config;
  },
};

module.exports = nextConfig;
