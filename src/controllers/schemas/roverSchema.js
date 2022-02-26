const Joi = require('joi');

const schema = Joi.object({
    roverName: Joi.string()
                .min(3)
                .max(20)
                .pattern (new RegExp('^[a-zA-Z]{5,20}$'))
                .required(),
});

module.exports = schema;