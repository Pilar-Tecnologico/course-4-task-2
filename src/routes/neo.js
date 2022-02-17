const express = require('express');
const router = express.Router();
const { getNeoFeed } = require('../controllers/neo.controller');
//COMPLETE the router
router.get('/feed', getNeoFeed );


module.exports = router;
