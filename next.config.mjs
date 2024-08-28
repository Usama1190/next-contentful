// import { space } from 'postcss/lib/list';

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    env: {
        CONTENTFUL_SPACE_ID: 'o73qsurkfns2',
        CONTENTFUL_ENVIRONMENT: 'master',
    }
};

export default nextConfig;
