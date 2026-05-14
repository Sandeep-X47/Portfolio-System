import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // 🔥 this is the key for GitHub Pages
  images: {
    unoptimized: true // required for static export
  }
};

export default nextConfig;