import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — the site has no server features, so it deploys as static assets
  // on Cloudflare Workers (see wrangler.toml).
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
