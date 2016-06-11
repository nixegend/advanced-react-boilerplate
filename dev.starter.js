const gConfig = require('./general.config');
const open = require('open');
const nodemon = require('nodemon');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const wConfig = require('./webpack.config');

nodemon({
  ext: 'js jsx',
  watch: ['server/']
}).on('start', () => {
  console.log('NODEMON => App has started');
}).on('restart', (files) => {
  console.log('NODEMON => App restarted due to: \n', files);
});

new WebpackDevServer(webpack(wConfig), wConfig.devServer)
  .listen(gConfig.clientPort, gConfig.clientHost, (err, result) => {
    if (err) console.log(err);

    console.log('Listening at ' + gConfig.clientHost + ':' + gConfig.clientPort + '/webpack-dev-server/');
    open('http://' + gConfig.clientHost + ':' + gConfig.clientPort + '/webpack-dev-server/');
  });