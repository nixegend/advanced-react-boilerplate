'use strict';

let gConfig = require('../general.config');
let path = require('path');

module.exports = {
  context: path.join(__dirname, gConfig.appDir),

  output: {
    path: path.join(__dirname, gConfig.staticDir),
    publicPath: gConfig.urlBasePath,
    filename: "[name].js",
    library: "[name]"
  },

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx'],
    alias: {
      // some specific files
      // core: srcPath + '/core/'
    }
  },

  resolveLoader: {
    modulesDirectories: ['node_modules'],
    moduleTemplates: ['*-loader', '*'],
    extensions: ['', '.js', '.jsx']
  },

  module: {
    preLoaders: [
      // TODO: here should investigated and added some linter, i.e. eslint
    ],
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss/,
        loader: 'style-loader!css-loader?sourceMap!sass-loader?outputStyle=expanded&sourceMap'
      },
      {
        test: /\.(png|jpg|gif|eot|ttf|svg|woff|woff2)(\?.+)?$/,
        loader: 'file?name=[path][name].[ext]?[hash]'
      }
    ]
  }
};