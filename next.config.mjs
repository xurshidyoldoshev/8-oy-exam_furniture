/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "*",
            // port: "",
            // pathname: "/mycompany-data-bucket-dev/**",
          },
        ],
      },
};

export default nextConfig;
