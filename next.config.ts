import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  i18n: {
    locales: ['pt', 'en'],
    defaultLocale: 'pt',
  },
  async redirects() {
    return [
      {
        source: '/contact',
        destination: 'https://hub.notrus.ai/pt/contato',
        permanent: false,
      },
      {
        source: '/insights',
        destination: 'https://hub.notrus.ai/pt/insights',
        permanent: false,
      },
      {
        source: '/privacy-policy',
        destination: 'https://hub.notrus.ai/pt/politica-privacidade',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
