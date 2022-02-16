const express = require('express');
const router = express.Router();
const marsController= require('../controllers/mars.controller');
router.get('/manifests/:roverName', marsController.getManifest);

module.exports = router;
