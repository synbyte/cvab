/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development", // Disable in dev mode
  });
  
  const nextConfig = withPWA({
    // appDir is enabled by default in this version of Next.js
  });

module.exports = nextConfig
