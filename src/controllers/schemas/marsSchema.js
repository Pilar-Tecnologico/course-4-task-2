const joi = require("joi");

const schema = joi
  .string()
  .valid("spirit", "opportunity", "curiosity", "perseverance")
  .insensitive()
  .required();

module.exports = schema;
