const Joi = require('joi')

const roverSchema = Joi.string().valid('opportunity', 'curiosity', 'spirit').insensitive().required()
 

module.exports = {
    roverSchema
}