// next.config.js

const nextConfig = {
  images: {
    domains: ["s3-alpha-sig.figma.com"], // Allow images from this domain
  },
  compiler: {
    // Use the styled-components babel plugin
    // This enables server-side rendering for styled-components
    styledComponents: {
      // Set the option for ssr
      ssr: true,
    },
  },
};

export default nextConfig;
