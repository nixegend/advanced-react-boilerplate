'use strict';

const NODE_ENV = process.env.NODE_ENV;
let gConfig = require('../general.config');
let express = require('express');
let path = require('path');
let http = require('http');
let open = require('open');

let app = express();
app.set('port', gConfig.serverPort);

let server = http.createServer(app);
server.listen(gConfig.serverPort);

// static files
app.use(express.static(path.join(__dirname, gConfig.staticDir)));

if (NODE_ENV && NODE_ENV.replace(/\s/g, '') == 'dev') {

  let webpack = require('webpack');
  let WebpackDevServer = require('webpack-dev-server');
  let wConfig = require('../webpack.config');

  new WebpackDevServer(webpack(wConfig), wConfig.devServer)
    .listen(gConfig.clientPort, gConfig.host, function (err, result) {
      if (err) console.log(err);

      console.log('Listening at ' + gConfig.host + ':' + gConfig.clientPort + '/webpack-dev-server/');
      open('http://' + gConfig.host + ':' + gConfig.clientPort + '/webpack-dev-server/');
    });

} else {

  app.get('/*', function (req, res, next) {
    if (!(req.url.indexOf('/api/') === 0)) {
      res.sendFile(path.join(__dirname, gConfig.staticDir + '/index.html'));
      // res.render('index', { title: "WebGL-ioGame" }); // for ejs
    } else {
      next();
    }
  });

  console.log('Listening at ' + gConfig.host + ':' + gConfig.serverPort + '/');
  open('http://' + gConfig.host + ':' + gConfig.serverPort + '/');
}