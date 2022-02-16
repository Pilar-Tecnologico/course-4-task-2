const express = require('express');
const router = express.Router();
//COMPLETE the router
const marsController= require('../controllers/mars.controller');
router.get('/manifests/:roverName',marsController.getManifest );

module.exports = router;
