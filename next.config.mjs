/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/blog/:path',
        destination: '/writing/:path',
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
};

export default nextConfig;
