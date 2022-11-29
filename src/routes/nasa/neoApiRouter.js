const express = require('express');
const router = express.Router();
const {getNeoFeedController} = require('../../controllers/nasa/neoApiController')
const {errorHandler} = require('../../middlewares/errorHandlerMiddleware')

router.get('/feed', getNeoFeedController, errorHandler);

module.exports = router;
