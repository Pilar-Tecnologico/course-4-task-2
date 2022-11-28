const Errors = require('../errors/errors.json')
module.exports = {
    errorHandler: (err, req, res, next) => {
        const errorSchema = Errors[err.code] || {
            status: 500,
            message: "Unexpected error",
        };
        err.message = errorSchema.message;
        err.status = err.details?.cod || errorSchema.status;
        const {status,...rest} = err;
        res.status(status).json(rest);
    }
}