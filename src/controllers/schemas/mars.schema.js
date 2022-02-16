const Joi = require ('joi');

const queryMarsSchema = Joi.object({
    name: Joi.string().valid('Curiosity', 'Opportunity', 'Spirit').insensitive().required(),
}); 

module.exports = queryMarsSchema;