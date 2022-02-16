module.exports = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });

    return config;
  },
  reactStrictMode: true,
  images: {
    domains: ['brave-ritchie-84cd7d.netlify.app'],
    formats: ['image/webp'],
  },
  swcMinify: true,
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  experimental: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
};
