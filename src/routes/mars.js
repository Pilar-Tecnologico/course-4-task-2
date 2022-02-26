const express = require('express');
const router = express.Router();
const mars = require('../controllers/mars.controller');

router.get('/manifests/:roverName', mars.getManifest);

module.exports = router;
