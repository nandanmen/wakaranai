/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/n5/vocab",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
