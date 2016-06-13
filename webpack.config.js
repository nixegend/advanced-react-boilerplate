const NODE_ENV = process.env.NODE_ENV.replace(/\s/g,'');
const path = require('path');
const configs = {
  dev: require(path.join(__dirname, 'webpack-cfg/dev')),
  build: require(path.join(__dirname, 'webpack-cfg/build'))
  // test: require(path.join(__dirname, 'webpack-cfg/tests'))
};

module.exports = configs[NODE_ENV];