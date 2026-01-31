import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true, // Inline critical CSS to reduce render-blocking
  },
};

export default nextConfig;
