import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  outputFileTracingRoot: __dirname,
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
