'use strict';

let gConfig = require('./general.config');
let open = require('open');
let nodemon = require('nodemon');
let webpack = require('webpack');
let WebpackDevServer = require('webpack-dev-server');
let wConfig = require('./webpack.config');

nodemon({
  ext: 'js jsx',
  watch: ['server/']
}).on('start', () => {
  console.log('NODEMON => App has started');
}).on('quit', () => {
  console.log('NODEMON => App has quit');
}).on('restart', (files) => {
  console.log('NODEMON => App restarted due to: \n', files);
});

new WebpackDevServer(webpack(wConfig), wConfig.devServer)
  .listen(gConfig.clientPort, gConfig.clientHost, (err, result) => {
    if (err) console.log(err);

    console.log('Listening at ' + gConfig.clientHost + ':' + gConfig.clientPort + '/webpack-dev-server/');
    open('http://' + gConfig.clientHost + ':' + gConfig.clientPort + '/webpack-dev-server/');
  });