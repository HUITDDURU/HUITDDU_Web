/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["huitdduru.s3.ap-northeast-2.amazonaws.com"],
  },
  env: {
    NEXT_PUBLIC_BASEURL: process.env.NEXT_PUBLIC_BASEURL,
    NEXT_PUBLIC_SOCKET_BASEURL: process.env.NEXT_PUBLIC_SOCKET_BASEURL,
  },
};

module.exports = nextConfig;
