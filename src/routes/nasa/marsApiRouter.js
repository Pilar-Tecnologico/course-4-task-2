const express = require('express');
const router = express.Router();
const {getManifestController} = require('../../controllers/nasa/marsApiController')
router.get('/manifests/:roverName', getManifestController);

module.exports = router;
