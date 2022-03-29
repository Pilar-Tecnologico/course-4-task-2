const Joi = require('joi');

const userPost = Joi.object({
    name: Joi.string(),
    email: Joi.string(),
    password: Joi.string(),
    birthdate: Joi.date()
});

module.exports = userPost;