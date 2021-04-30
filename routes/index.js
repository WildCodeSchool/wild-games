const games = require('./games');

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: (req, h) => {
      return h.redirect('/documentation');
    },
  },
  ...games,
];
