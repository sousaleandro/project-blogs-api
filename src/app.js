const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());

app.get('/', (_request, response) => {
  response.send('Running!');
});

app.use('/', routes);

module.exports = app;
