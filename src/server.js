'use strict'

const express = require('express');
const dogsHandler = require('./handlers/dogsHandler');

function server(axios) {
  const app = express();

  app.get('/dogs', dogsHandler(axios));

  return app;
}

module.exports = server;
