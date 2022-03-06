const Joi = require('joi')

const marsSchema = Joi.object({
    rover_name: Joi.string().valid('opportunity', 'curiosity', 'spirit').insensitive().required(),
    api_key: Joi.string().required()
})

const neoSchema = Joi.object({
    start_date: Joi.date().iso().required(),
    end_date: Joi.date().iso().required(),
    api_key: Joi.string().required()
})

module.exports = {
    marsSchema,
    neoSchema
}