/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/kanji/quiz",
        permanent: false,
      },
      {
        source: "/kanji",
        destination: "/kanji/5",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
