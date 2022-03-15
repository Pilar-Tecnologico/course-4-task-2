const Joi = require('joi');

const marsSchema = Joi.object({
    roverName : Joi.string().valid('Opportunity', 'Curiosity', 'Spirit').insensitive().required(),
    api_key   : Joi.string().required()
})

module.exports = { marsSchema };