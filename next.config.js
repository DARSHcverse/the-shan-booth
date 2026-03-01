const path = require("path");

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
      "style-src 'self' 'unsafe-inline'",
      "font-src 'self' data: https:",
      "manifest-src 'self'",
      "worker-src 'self' blob:",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://widgets.sociablekit.com https://js.stripe.com",
      "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://stats.g.doubleclick.net",
      "frame-src https://www.google.com https://js.stripe.com",
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
