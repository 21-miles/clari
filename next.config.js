/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: false,
  output: "export",
  trailingSlash: true,
  assetPrefix: isProd ? process.env.WEBSITE_URL : "",
};

module.exports = nextConfig;
