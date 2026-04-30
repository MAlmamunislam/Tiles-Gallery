/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
      protocol: 'https',
      hostname: '**',
    },
    {
      protocol: 'http',
      hostname: '**',
    },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;

