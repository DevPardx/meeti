import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typedRoutes: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ttxbib9eup.ufs.sh"
      }
    ]
  }
};

export default nextConfig;
