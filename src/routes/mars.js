const express = require('express');
const router = express.Router();
//COMPLETE the router
const { getManifestController } = require('../controllers/mars.controller');

router.get('/manifests/:roverName', getManifestController );

module.exports = router;
