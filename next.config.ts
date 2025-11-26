import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/pt/contato',
        destination: 'https://old.notrus.ai/pt/contato',
        permanent: false,
      },
      {
        source: '/pt/insights',
        destination: 'https://old.notrus.ai/pt/insights',
        permanent: false,
      },
      {
        source: '/pt/politica-privacidade',
        destination: 'https://old.notrus.ai/pt/politica-privacidade',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
