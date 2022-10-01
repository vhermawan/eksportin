/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const prod = process.env.NODE_ENV === 'production'
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const settings = {
  config: [
    {
      test: /\.(jpe?g|png|webp)/,
      options: {
        quality: 50,
      },
    },
  ],
  overrideExtension: true,
  detailedLogs: false,
  silent: false,
  strict: true,
}

module.exports = withPWA({
  pwa: {
    disable: prod ? false : true,
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
  devIndicators: {
    autoPrerender: false,
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    FLASK_URL: process.env.FLASK_URL,
  },
  webpack5: true,
  plugins: [new ImageminWebpWebpackPlugin(settings)],
},withBundleAnalyzer({}))
