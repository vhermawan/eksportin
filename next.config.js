/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const prod = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  pwa: {
    // disable: prod ? false : true,
    dest: 'public',
    register: true,
    skipWaiting: true,
    runtimeCaching,
  },
  devIndicators: {
    autoPrerender: false,
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    FLASK_URL: process.env.FLASK_URL,
  },
  webpack5: true,
})
