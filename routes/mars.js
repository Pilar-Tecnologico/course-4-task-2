const express = require('express');
const router = express.Router();
const marsController = require('../controllers/mars.controller');

router.get('/manifests/:roverName', function(req, res) {
  marsController.getManifest(req, res);
});
router.get('/:roverName/photos', function(req, res) {
  marsController.getRoversPhotos(req, res);
});

module.exports = router;
