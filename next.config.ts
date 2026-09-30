import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  /*
   * A stray package-lock.json in the user profile made Next infer the home
   * directory as the workspace root, which would trace the wrong files into
   * the deployment bundle. Pin it to this project.
   */
  outputFileTracingRoot: path.join(__dirname),
  /*
   * The premium collection uses licensed Unsplash photography. Images are
   * resized by Unsplash's own CDN through a custom loader, so this entry is
   * only a guard for any plain next/image use of the same host.
   */
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
