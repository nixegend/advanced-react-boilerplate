const gConfig = require('../general.config');
const baseConfig = require('./base');
const webpack = require('webpack');
const path = require('path');
const _ = require('lodash');

const config = _.merge({
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
    })
  ]

}, baseConfig);

// Add needed loaders
config.module.loaders.push({
  test: /\.js$/,
  include: path.join(__dirname, gConfig.appDir),
  loader: 'babel'
});

module.exports = config;