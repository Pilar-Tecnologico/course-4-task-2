const express = require('express');
const router = express.Router();
//COMPLETE the router
const { getNeoFeedController } = require('../controllers/neo.controller');

router.get('/feed', getNeoFeedController);

module.exports = router;
