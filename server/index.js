'use strict';

const NODE_ENV = process.env.NODE_ENV;
let gConfig = require('../general.config');
let express = require('express');
let path = require('path');
let http = require('http');

let app = express();
app.set('port', gConfig.serverPort);

let server = http.createServer(app);
server.listen(gConfig.serverPort);

// static files
app.use(express.static(path.join(__dirname, gConfig.staticDir)));

app.get('/*', function (req, res, next) {
  if (!(req.url.indexOf('/api/') === 0)) {
    res.sendFile(path.join(__dirname, gConfig.staticDir + '/index.html'));
    // res.render('index', { title: "WebGL-ioGame" }); // for ejs
  } else {
    next();
  }
});

if (NODE_ENV && NODE_ENV.replace(/\s/g, '') == 'prod') {
  let open = require('open');
  console.log('Listening at ' + gConfig.serverHost + ':' + gConfig.serverPort + '/');
  open('http://' + gConfig.serverHost + ':' + gConfig.serverPort + '/');
}