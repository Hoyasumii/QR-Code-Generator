import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  env: {
    BASE_URL: process.env.BASE_URL,
    LOCATION_API_URL: process.env.LOCATION_API_URL,
    OWNER_SITE_URL: process.env.OWNER_SITE_URL,
    REPO_URL: process.env.REPO_URL,
  },
};

export default nextConfig;
