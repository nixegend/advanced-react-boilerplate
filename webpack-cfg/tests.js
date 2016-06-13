const gConfig = require('../general.config');
const baseConfig = require('./base');
const webpack = require('webpack');
const path = require('path');
const _ = require('lodash');

const config = _.merge({
    devtool: 'inline-source-map',

    module: {
        preLoaders: [{
            test: /\.(js|jsx)$/,
            loader: 'isparta-instrumenter-loader',
            include: path.join(__dirname, gConfig.appDir)
        }],

        loaders: [{
            test: /\.(png|jpg|gif|woff|woff2|ttf|svg|css|sass|scss|less|styl)(\?.+)?$/,
            loader: 'null-loader'
        }, {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            include: path.join(__dirname, gConfig.appDir)
        }]
    }
}, baseConfig);

module.exports = config;