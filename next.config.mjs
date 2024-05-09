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
};

export default nextConfig;
