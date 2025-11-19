import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/the-grand",
  assetPrefix: "/the-grand/",
  images: { unoptimized: true },
};

export default nextConfig;
