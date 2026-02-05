/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|webp|svg|mp4|webm)$/i,
      type: "asset/resource",
    });
    return config;
  },
};

module.exports = nextConfig;
