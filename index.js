const app = require('express')();
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const games = require('./api.json');
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(helmet());
app.use(morgan('combined'));
app.disable('x-powered-by');

app.get('/:id', (req, res) => {
  const { id } = req.params;

  const game = games.find((g) => g.id === +id);

  if (game) {
    return res.status(200).json(game);
  } else {
    return res.status(404).json({
      status: '404',
      msg: 'Not Found',
    });
  }
});

app.get('/', (_, res) => {
  res.status(200).json(games);
});

app.listen(PORT, (err) => {
  if (err) {
    throw new Error('Something bad happened ...');
  }
  console.log(`Listening to ${PORT}.`);
});
