const withTwin = require('./withTwin');

/** @type {import('next').NextConfig} */
const nextConfig = withTwin({
  reactStrictMode: true,
  pageExtensions: ['page.tsx'],
});

module.exports = nextConfig;
