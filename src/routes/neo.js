const express = require('express');
const router = express.Router();
const neoController = require('../controllers/neo.controller');
//COMPLETE the router
router.get('/feed',neoController.getNeoFeed);


module.exports = router;
