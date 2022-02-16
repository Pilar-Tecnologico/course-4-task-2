const express = require('express');
const router = express.Router();
//COMPLETE the router
const neoController= require('../controllers/neo.controller');
router.get('/feed',neoController.getNeoFeed );


module.exports = router;
