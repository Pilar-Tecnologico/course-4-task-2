const express = require('express');
const marsController = require('../controllers/mars.controller');
const router = express.Router();

router.get('/manifests/:roverName', function(req, res) {
  marsController.getManifest(req, res);
});

module.exports = router;
