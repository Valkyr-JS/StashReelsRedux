import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath:
    process.env.NODE_ENV === "production"
      ? "/plugin/StashReels/assets/app"
      : "",
  distDir: "dist/app",
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
