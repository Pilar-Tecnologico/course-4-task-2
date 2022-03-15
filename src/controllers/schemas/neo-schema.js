const Joi = require('joi');

const neoSchema = Joi.object({
    start_date : Joi.date().iso(),
    end_date   : Joi.date().iso(),
    api_key    : Joi.string().required()
})

module.exports = { neoSchema };