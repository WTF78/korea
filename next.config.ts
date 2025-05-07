import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    distDir: "dist",
    images: {unoptimized: true},
    // basePath: '/korea'
};

export default nextConfig;

