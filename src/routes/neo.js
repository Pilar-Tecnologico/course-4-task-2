const express = require('express');
const router = express.Router();
const neocontroller = require('../controllers/neo.controller')
//COMPLETE the router
router.get('/feed', neocontroller.getNeoFeed);


module.exports = router;
