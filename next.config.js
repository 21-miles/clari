/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.netlify.app",
        port: "",
        pathname: "imgs",
      },
    ],
  },
};

module.exports = nextConfig;
