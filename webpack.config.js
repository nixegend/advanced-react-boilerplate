const NODE_ENV = process.argv.indexOf('--prod') !== -1 ? 'production' : 'development';
const path = require('path');

process.env.NODE_ENV = NODE_ENV;

const configs = {
  development: require(path.join(__dirname, 'webpack-cfg/dev')),
  production: require(path.join(__dirname, 'webpack-cfg/prod'))
};

module.exports = configs[NODE_ENV];