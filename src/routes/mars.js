const express = require('express');
const router = express.Router();
const { getManifestController } = require('../controllers/mars.controller.js');
//COMPLETE the router
router.get('/manifests/:roverName', getManifestController);

module.exports = router;
