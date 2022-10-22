/** @type {import('next').NextConfig} */
const dev = process.env.NODE_ENV !== 'production';
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: ''
  },
  assetPrefix: dev ? 'http://localhost:3000/' : 'https://pypackage.com/',
  serverRuntimeConfig: {
    base: dev ? 'http://localhost:3000' : 'https://pypackage.com'
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static',
  },
}

module.exports = nextConfig
