const gConfig = require('../general.config');
const baseConfig = require('./base');
const webpack = require('webpack');
const path = require('path');

const config = Object.assign({}, {
  entry: {
    app: ['./index']
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`
    })
  ]

}, baseConfig);

// Add needed loaders
config.module.loaders.push({
  test: /\.js$/,
  include: path.join(__dirname, gConfig.srcDir),
  loader: 'babel'
});

module.exports = config;