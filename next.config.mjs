// next.config.mjs
import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**', // Allow images from any HTTPS hostname
            },
            {
                protocol: 'http',
                hostname: '**', // Allow images from any HTTP hostname
            },
        ],
        unoptimized: true, // Disable Next.js image optimization
    },
};

export default nextConfig;