/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize for production
  reactStrictMode: true,
  
  // Disable image optimization (using static images)
  images: {
    unoptimized: true,
  },

  // Enable compression
  compress: true,

  // PoweredBy header removal for security
  poweredByHeader: false,

  // Turbopack is automatically used in Next.js 16+
}

module.exports = nextConfig
