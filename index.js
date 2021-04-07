const path = require('path');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const games = require('./api.json');

const { errorHandler, notFound } = require('./middlewares');

app.use(cors());
app.use(helmet());
app.use(morgan('combined'));
app.disable('x-powered-by');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/wild-games', (_, res) => {
  res.sendFile(path.join(__dirname + '/README.html'));
});

app.get('/wild-games/games', (_, res) => {
  res.status(200).json(games);
});

app.get('/wild-games/games/:id', (req, res, next) => {
  const { id } = req.params;

  const game = games.find((g) => g.id === +id);

  if (game) {
    return res.status(200).json(game);
  } else {
    return next(new Error());
  }
});

app.use(notFound);
app.use(errorHandler);

exports.wild_games = app;
