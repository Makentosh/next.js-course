/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  // distDir: 'dist',
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.looper.com',
        port: '',
        pathname: '/img/gallery/the-ending-of-avatar-finally-explained/**',
      },
    ],
  },
}

module.exports = nextConfig
