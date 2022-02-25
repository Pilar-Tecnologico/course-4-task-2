const Joi = require("joi");

const query = Joi.object({
  start_date: Joi.date().max("now"),
  end_date: Joi.date().min("2022-02-24"),
});
module.exports = query;
