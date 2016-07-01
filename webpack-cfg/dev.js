const gConfig = require('../general.config');
const baseConfig = require('./base');
const webpack = require('webpack');
const path = require('path');

const config = Object.assign({}, {
    devtool: 'inline-source-map',

    entry: {
        app: [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://' + gConfig.clientHost + ':' + gConfig.clientPort,
            'webpack/hot/only-dev-server',
            './index.hot-loader'
        ]
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`
      })
    ],

    devServer: {
        contentBase: path.join(__dirname, '../static/'),
        historyApiFallback: true,
        hot: true,
        inline: false,
        host: gConfig.clientHost,
        port: gConfig.clientPort,
        quiet: false,
        debug: true,
        publicPath: gConfig.urlBasePath,
        noInfo: false,
        proxy: [{
            path: gConfig.urlAPI,
            target: 'http://' + gConfig.serverHost + ':' + gConfig.serverPort + '/'
        }],
        stats: {
            colors: true
        }
    }

}, baseConfig);

// Add needed loaders
config.module.loaders.push({
    test: /\.js$/,
    include: path.join(__dirname, gConfig.srcDir),
    loader: 'babel-loader'
});

module.exports = config;