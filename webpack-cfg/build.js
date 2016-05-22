'use strict';

let gConfig = require('../general.config');
let baseConfig = require('./base');
let webpack = require('webpack');
let path = require('path');
let _ = require('lodash');

let config = _.merge({
  entry: {
    app: ['./index']
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true
      }
    })
  ]

}, baseConfig);

// Add needed loaders
config.module.loaders.push({
  test: /\.(js|jsx)$/,
  include: path.join(__dirname, gConfig.appDir),
  loader: 'babel'
});

module.exports = config;