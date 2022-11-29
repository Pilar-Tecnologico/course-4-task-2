const express = require('express');
const router = express.Router();
const {getManifestService} = require("../services/manifest.service")

router.get('/manifests/:roverName/',getManifestService );

module.exports = router;