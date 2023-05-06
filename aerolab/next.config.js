/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "coding-challenge-api.aerolab.co",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

module.exports = nextConfig;
