import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/pt/contato',
        destination: 'https://old.notrus.ai/pt/contato',
      },
      {
        source: '/pt/insights',
        destination: 'https://old.notrus.ai/pt/insights',
      },
      {
        source: '/pt/politica-privacidade',
        destination: 'https://old.notrus.ai/pt/politica-privacidade',
      },
      {
        source: '/assets/:path*',
        destination: 'https://old.notrus.ai/assets/:path*',
      },
      {
        source: '/_next/static/:path*',
        destination: 'https://old.notrus.ai/_next/static/:path*',
      },
      {
        source: '/:path*.svg',
        destination: 'https://old.notrus.ai/:path*.svg',
      },
      {
        source: '/:path*.png',
        destination: 'https://old.notrus.ai/:path*.png',
      },
      {
        source: '/:path*.jpg',
        destination: 'https://old.notrus.ai/:path*.jpg',
      },
      {
        source: '/:path*.jpeg',
        destination: 'https://old.notrus.ai/:path*.jpeg',
      },
      {
        source: '/:path*.gif',
        destination: 'https://old.notrus.ai/:path*.gif',
      },
      {
        source: '/:path*.webp',
        destination: 'https://old.notrus.ai/:path*.webp',
      },
      {
        source: '/:path*.ico',
        destination: 'https://old.notrus.ai/:path*.ico',
      },
    ];
  },
};

export default nextConfig;
