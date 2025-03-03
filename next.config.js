/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/nextjsProject', // Should match your repository name
  assetPrefix: '/nextjsProject/', // Should match your repository name
}

module.exports = nextConfig
