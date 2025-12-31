/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // No basePath needed for username.github.io repos
  // basePath: '/sijarabir.github.io',
  // assetPrefix: '/sijarabir.github.io/',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
