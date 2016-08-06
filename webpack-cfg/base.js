const gConfig = require('../general.config');
const path = require('path');
const preCss = require('precss');
const postCssNext = require('postcss-cssnext');

module.exports = {
  context: path.join(__dirname, gConfig.srcDir),

  output: {
    path: path.join(__dirname, gConfig.appDir),
    publicPath: gConfig.urlBasePath,
    filename: '[name].js',
    library: '[name]'
  },

  // eslint: {
  //   configFile: path.join(__dirname, '../.eslintrc'),
  //   failOnWarning: false,
  //   failOnError: true,
  //   quiet: true
  // },

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js'],
    alias: {
      // some specific files
      // core: srcPath + '/core/'
    }
  },

  resolveLoader: {
    modulesDirectories: ['node_modules'],
    moduleTemplates: ['*-loader', '*'],
    extensions: ['', '.js']
  },

  module: {
    // preLoaders: [{
    //   test: /\.js$/,
    //   loader: 'eslint-loader',
    //   exclude: /node_modules/
    // }],
    loaders: [{
      test: /\.css$/,
      exclude: /\.module.css$/,
      loaders: ['style', 'css', 'postcss']
    }, {
      test: /\.module.css$/,
      loader: 'style-loader!css-loader?camelCase&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
    }, {
      test: /\.(ico|png|jpg|gif|eot|ttf|svg|woff|woff2)(\?.+)?$/,
      loader: 'file-loader?name=[path][name].[ext]?[hash]'
    }, {
      test: /\.(json)(\?.+)?$/,
      loader: 'url-loader?name=[path][name].[ext]?[hash]'
    }]
  },

  // postLoaders [ ... ]

  postcss: [preCss, postCssNext]

};