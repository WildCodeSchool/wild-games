const Joi = require('joi');
const { gameCollection, gameSchema } = require('../schemas');
const Games = require('../controller/Games');

module.exports = [
  {
    method: 'GET',
    path: '/games',
    handler: Games.getAll,
    options: {
      description: 'Get games',
      notes: 'Returns an array of games',
      tags: ['api'], // ADD THIS TAG
      plugins: {
        'hapi-swagger': {
          responses: {
            200: {
              schema: gameCollection,
            },
          },
        },
      },
    },
  },
  {
    method: 'GET',
    path: '/games/{id}',
    handler: Games.getOne,
    options: {
      description: 'Get one game',
      notes: 'Returns a game from the provided ID',
      tags: ['api'], // ADD THIS TAG
      validate: {
        params: Joi.object({
          id: Joi.number().required().description('the game ID'),
        }),
      },
      plugins: {
        'hapi-swagger': {
          responses: {
            200: {
              schema: gameSchema,
            },
          },
        },
      },
    },
  },
];
