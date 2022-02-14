const Joi = require("joi");

const schema = Joi.object({
  rover_name: Joi.string()
    .min(6)
    .max(11)
    .pattern(new RegExp("^[a-zA-Z]{6,11}$"))
    .required(),
});

module.exports = schema;
