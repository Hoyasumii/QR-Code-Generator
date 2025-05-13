import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    LOCATION_API_URL: process.env.LOCATION_API_URL,
    OWNER_SITE_URL: process.env.OWNER_SITE_URL,
    REPO_URL: process.env.REPO_URL,
  },
};

export default nextConfig;
