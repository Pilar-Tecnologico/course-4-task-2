const express = require('express');
const router = express.Router();
//COMPLETE the router
const {getManifestService} = require("../services/manifest.service")
router.get('/manifests/:roverName', getManifestService );
module.exports = router;
