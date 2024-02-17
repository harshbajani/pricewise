/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponents: true,
  },
  images: {
    domains: ['m.media-amazon.com']
  }
}

module.exports = nextConfig
