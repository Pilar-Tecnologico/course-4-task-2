const Joi = require("joi");
const roverSchema = Joi.string().valid(
  "curiosity",
  "opportunity",
  "spirit"
);
module.exports = roverSchema;
