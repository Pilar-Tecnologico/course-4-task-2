const express = require('express');
const router = express.Router();
const {getManifestService} = require("../services/manifest.service")
//COMPLETE the router
router.get('/manifests/:roverName/',getManifestService );

module.exports = router;
