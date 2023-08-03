/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        // port: '',
        // pathname: '/account123/**',
      },
    ],
  },
  // images: {
  //   domains: ["images.pexels.com/photos"],
  // },
};

module.exports = nextConfig;
