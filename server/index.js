'use strict';

const NODE_ENV = process.env.NODE_ENV;
const gConfig = require('../general.config');
const express = require('express');
const path = require('path');
const http = require('http');

const app = express();
app.set('port', gConfig.serverPort);

const server = http.createServer(app);
server.listen(gConfig.serverPort);

// static files
app.use(express.static(path.join(__dirname, gConfig.staticDir)));

app.get('/*', (req, res, next) => {
  if (!(req.url.indexOf('/api/') === 0)) {
    res.sendFile(path.join(__dirname, gConfig.staticDir + '/index.html'));
    // res.render('index', { title: "React-starter" }); // for ejs
  } else {
    next();
  }
});

if (NODE_ENV && NODE_ENV.replace(/\s/g, '') === 'prod') {
  const open = require('open');
  console.log('Listening at ' + gConfig.serverHost + ':' + gConfig.serverPort + '/');
  open('http://' + gConfig.serverHost + ':' + gConfig.serverPort + '/');
}