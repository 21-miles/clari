/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: "export",
  trailingSlash: true,
  swcMinify: true,
  assetPrefix: isProd ? process.env.WEBSITE_URL : "",
};

module.exports = nextConfig;
