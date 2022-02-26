const express = require('express');
const neo = require ('../controllers/neo.controller');
const router = express.Router();


router.get('/feed', neo.getNeoFeed);


module.exports = router;
