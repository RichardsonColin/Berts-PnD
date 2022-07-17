module.exports = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });

    return config;
  },
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
  env: {
    SANITY_PROJECT_ID: process.env['SANITY_PROJECT_ID'],
    RECAPTCHA_SITE_KEY: process.env['RECAPTCHA_SITE_KEY'],
  },
  experimental: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
};
