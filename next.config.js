/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    runtime: 'edge',
    serverComponents: true,
  },
}

module.exports = nextConfig
