'use strict';

const NODE_ENV = process.env.NODE_ENV.replace(/\s/g,'');
let path = require('path');
let configs = {
  dev: require(path.join(__dirname, 'webpack-cfg/dev')),
  build: require(path.join(__dirname, 'webpack-cfg/build'))
  // can be added test runer
};

module.exports = configs[NODE_ENV];