const express = require('express');
const router = express.Router();
const { getNeoFeedController } = require('../controllers/neo.controller');
const {errorHandler}= require('../middlewares/errorHandler.middleware')


router.get('/feed', getNeoFeedController, errorHandler);
module.exports = router;
