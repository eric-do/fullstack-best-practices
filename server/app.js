const express = require('express');

const path = require('path');

const app = express();

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.get('/movies', (req, res) => {
  res.send([
    {
      title: 'Top Gun',
    },
  ]);
});

module.exports = app;
