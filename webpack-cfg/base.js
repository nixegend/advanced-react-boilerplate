const gConfig = require('../general.config');
const path = require('path');

module.exports = {
  context: path.join(__dirname, gConfig.appDir),

  output: {
    path: path.join(__dirname, gConfig.staticDir),
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
      test: /\.scss/,
      loader: 'style-loader!css-loader?sourceMap!sass-loader?outputStyle=expanded&sourceMap'
    }, {
      test: /\.(html|ico|png|jpg|gif|eot|ttf|svg|woff|woff2)(\?.+)?$/,
      loader: 'file-loader?name=[path][name].[ext]?[hash]'
    }]
  }
};