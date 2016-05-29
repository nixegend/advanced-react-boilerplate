'use strict';

let gConfig = require('../general.config');
let baseConfig = require('./base');
let webpack = require('webpack');
let path = require('path');
let _ = require('lodash');

let config = _.merge({
    devtool: 'eval',

    entry: {
        app: [
            'webpack-dev-server/client?http://' + gConfig.clientHost + ':' + gConfig.clientPort,
            'webpack/hot/only-dev-server',
            './index'
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],

    devServer: {
        contentBase: path.join(__dirname, gConfig.staticDir),
        historyApiFallback: true,
        hot: true,
        inline: false,
        host: gConfig.clientHost,
        port: gConfig.clientPort,
        quiet: false,
        debug: true,
        publicPath: gConfig.urlBasePath,
        noInfo: true,
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
    test: /\.(js|jsx)$/,
    include: path.join(__dirname, gConfig.appDir),
    loader: 'react-hot!babel-loader'
});

module.exports = config;