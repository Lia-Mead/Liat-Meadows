const webpack = require('webpack');

module.exports = {
  // ... other Webpack config options ...
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
  stats: {
    warningsFilter: [/source-map-loader/],
  },
};

