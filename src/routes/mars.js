const express = require('express');
const router = express.Router();
const marsController = require('../controllers/mars.controller');

//COMPLETE the router
router.get('/manifests/:roverName', marsController.getManifest);

module.exports = router;