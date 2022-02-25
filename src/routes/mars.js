const express = require('express');
const { getManifest } = require('../controllers/mars.controller');
const router = express.Router();
//COMPLETE the router
router.get('/manifests/:roverName',getManifest );

module.exports = router;
