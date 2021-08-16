const withImages = require('next-images');

module.exports = {
  reactStrictMode: true,
  withImages: withImages({
    esModule: true,
  }),
};
