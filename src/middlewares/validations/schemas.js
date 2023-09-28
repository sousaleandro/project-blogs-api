const Joi = require('joi');

const userSchema = Joi.object({
  displayName: Joi.string().min(8).required().label('displayName'),
  email: Joi.string().email().required().label('email'),
  password: Joi.string().min(6).required().label('password'),
  image: Joi.string().uri().optional().label('image'),
});

// const postSchema = Joi.object({
//   title: Joi.string().min(1).required().label('title'),
//   content: Joi.string().min(1).required().label('content'),
//   categoryIds: Joi.array().items(Joi.number().integer().positive()).required().label('categoryIds'),
// });

module.exports = {
  userSchema,
  // postSchema,
};