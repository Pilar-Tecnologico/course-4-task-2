const express = require('express');
const neoController= require('../controllers/neo.controller');
const router = express.Router();

//COMPLETE the router
router.get('/feed', neoController.getNeoFeed);
module.exports = router;
