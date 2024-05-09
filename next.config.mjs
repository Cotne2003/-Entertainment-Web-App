// next.config.js

const nextConfig = {
  images: {
    domains: ["s3-alpha-sig.figma.com"],
  },
  compiler: {
    styledComponents: {
      ssr: true,
    },
  },
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
  },
};

export default nextConfig;
