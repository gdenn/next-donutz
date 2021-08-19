module.exports = {
  images: {
    domains: ["i.imgur.com", "imgur.com"]
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}
