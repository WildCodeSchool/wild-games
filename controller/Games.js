const games = require('../api.json');

module.exports = {
  getAll: () => {
    return games;
  },
  getOne: (request, h) => {
    const foundGame = games.find((g) => g.id === request.params.id);

    if (!foundGame) {
      return h.response('Game not found').code(404);
    }
    return h.response(foundGame);
  },
};
