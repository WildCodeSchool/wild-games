const app = require('express')();
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const { errorHandler, notFound } = require('./middlewares');
const games = require('./api.json');
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(helmet());
app.use(morgan('combined'));
app.disable('x-powered-by');

app.get('/:id', async (req, res, next) => {
  const { id } = req.params;

  const game = games.find((g) => g.id === +id);

  if (game) {
    return res.status(200).json(game);
  } else {
    return next(new Error());
  }
});

app.get('/', (_, res) => {
  res.status(200).json(games);
});

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, (err) => {
  if (err) {
    throw new Error('Something bad happened ...');
  }
  console.log(`Listening to ${PORT}.`);
});
