import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/mathiasaweli",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
