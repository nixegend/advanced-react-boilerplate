'use strict';

const gConfig = require('../general.config');
const express = require('express');
const path = require('path');
const http = require('http');

const app = express();
app.set('port', gConfig.serverPort);

const server = http.createServer(app);
server.listen(gConfig.serverPort);

// static files
app.use(express.static(path.join(__dirname, '../static/')));

app.get('/*', (req, res, next) => {
  if (!(req.url.indexOf('/api/') === 0)) {
    res.sendFile(path.join(__dirname, '../static/index.html'));
    // res.render('index', { title: "React-starter" }); // for ejs
  } else {
    next();
  }
});

if (process.argv.indexOf('--open') !== -1) {
  const open = require('open');
  console.log('Listening at ' + gConfig.serverHost + ':' + gConfig.serverPort + '/');
  open('http://' + gConfig.serverHost + ':' + gConfig.serverPort + '/');
}