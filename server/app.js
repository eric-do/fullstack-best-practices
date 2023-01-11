const express = require('express');

const path = require('path');

const app = express();

const movies = [
  {
    title: 'Top Gun',
  },
];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.get('/movies', (req, res) => {
  res.send(movies);
});

app.post('/movies', (req, res) => {
  const { movie } = req.body;
  console.log(req.get('Content-Type'));
  console.log(movie);
  movies.push(movie);
  res.status(201).send();
});

module.exports = app;
