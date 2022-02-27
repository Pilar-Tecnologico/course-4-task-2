const express = require('express');
const router = express.Router();
const marscontroller = require('../controllers/mars.controller')
//COMPLETE the router
router.get('/manifests/:roverName', marscontroller.getManifest);

module.exports = router;
