const Joi = require('joi')

const roverSchema = Joi.string().valid('opportunity', 'curiosity', 'spirit').insensitive().required()
 
const neoSchema = Joi.object({
    start_date: Joi.date().iso().required(),
    end_date: Joi.date().iso().required(),
    api_key: Joi.string().required()
})

module.exports = {
    roverSchema,
    neoSchema
}