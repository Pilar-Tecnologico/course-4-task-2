const Joi = require('joi');

const query = Joi.object({
    start_date: Joi.date().greater('2022-02-15').max('now'),
    end_date: Joi.date().greater('2022-02-15').max('now')
})

module.exports = query;