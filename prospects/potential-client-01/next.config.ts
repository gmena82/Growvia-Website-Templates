import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Disabled typed routes to simplify dynamic blog routes
  // typedRoutes: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
