/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development", // Disable in dev mode
  });
  
  const nextConfig = withPWA({
    experimental: {
      appDir: true, // Enable App Router
    },
  });

module.exports = nextConfig
