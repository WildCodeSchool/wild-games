const Joi = require('joi');

const genreSchema = Joi.object({
  id: Joi.number(),
  name: Joi.string(),
  slug: Joi.string(),
  games_count: Joi.number(),
  image_background: Joi.string(),
});

const clipSchema = Joi.object({
  clip: Joi.string(),
  clips: Joi.object({
    320: Joi.string(),
    640: Joi.string(),
    full: Joi.string(),
  }),
  preview: Joi.string(),
});

const gameSchema = Joi.object({
  id: Joi.number(),
  slug: Joi.string(),
  name: Joi.string(),
  released: Joi.string(),
  background_image: Joi.string(),
  rating: Joi.number(),
  saturated_color: Joi.string(),
  released: Joi.string(),
  saturated_color: Joi.string(),
  dominant_color: Joi.string(),
  genre: Joi.array().items(genreSchema),
  clip: clipSchema,
  short_screenshots: Joi.array().items(
    Joi.object({
      id: Joi.number(),
      image: Joi.string(),
    })
  ),
});

const gameCollection = Joi.array().items(gameSchema);

module.exports = {
  gameSchema,
  gameCollection,
};
