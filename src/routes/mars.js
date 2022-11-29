const express = require('express');
const router = express.Router();
const { getManifestController} = require('../controllers/mars.controller')
router.get('/manifest/:roverName/', getManifestController);

module.exports = router;
