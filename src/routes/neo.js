const express = require('express');
const router = express.Router();
const { getNeoFeedController } = require('../controllers/neo.controller.js');
//COMPLETE the router
router.get('/feed', getNeoFeedController);

module.exports = router;
