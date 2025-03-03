/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    // Allow loading images from all domains to prevent issues with static export
    domains: ['localhost'],
    // Remove any path restrictions for images
    path: '/_next/image',
  },
  basePath: process.env.NODE_ENV === 'production' ? '/nextjsProject' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/nextjsProject/' : '',
  // Ensure trailing slashes consistent
  trailingSlash: true,
  // Enable React StrictMode
  reactStrictMode: true,
}

module.exports = nextConfig
