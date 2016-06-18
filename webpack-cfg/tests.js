const gConfig = require('../general.config');
const baseConfig = require('./base');
const webpack = require('webpack');
const path = require('path');
const _ = require('lodash');

const config = _.merge({
    devtool: 'inline-source-map',

    module: {
        preLoaders: [{
            test: /\.js$/,
            loader: 'isparta-instrumenter-loader',
            include: path.join(__dirname, gConfig.srcDir)
        }],

        loaders: [{
            test: /\.(png|jpg|gif|woff|woff2|ttf|svg|css|sass|scss|less|styl)(\?.+)?$/,
            loader: 'null-loader'
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            include: path.join(__dirname, gConfig.srcDir)
        }]
    }
}, baseConfig);

module.exports = config;