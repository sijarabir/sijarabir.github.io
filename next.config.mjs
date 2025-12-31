/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // No basePath needed for username.github.io repos
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
