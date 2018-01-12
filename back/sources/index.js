'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';
const app = require('./app');
// server
const server = express();
server.get('/', (req, res) => {
  res.send(app.helloWorld());
});

server.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
