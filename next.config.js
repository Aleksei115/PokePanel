/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
  },
  images:{
    domains:['raw.githubusercontent.com']
  },
  experimental: {
    serverComponents: false
  }

}

module.exports = nextConfig
