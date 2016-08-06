const gConfig = require('../general.config');
const path = require('path');

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
      loader: 'style-loader!css-loader'
    }, {
      test: /\.scss$/,
      exclude: /\.module.scss$/,
      loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
    }, {
      test: /\.module.scss$/,
      loader: 'style-loader!css-loader?camelCase&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader'
    }, {
      test: /\.(ico|png|jpg|gif|eot|ttf|svg|woff|woff2)(\?.+)?$/,
      loader: 'file-loader?name=[path][name].[ext]?[hash]'
    }, {
      test: /\.(json)(\?.+)?$/,
      loader: 'url-loader?name=[path][name].[ext]?[hash]'
    }]
  }
};