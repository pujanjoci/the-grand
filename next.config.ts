import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",                     // REQUIRED for GitHub Pages
  images: {
    unoptimized: true,                  // Needed because images optimizer won't run on static hosting
  },
  basePath: "/the-grand",               // MUST match your GitHub repo name
  assetPrefix: "/the-grand/",           // Static assets prefix
};

export default nextConfig;
