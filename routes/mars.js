const express = require('express');
const router = express.Router();
const marsController = require('../controllers/mars.controller')

router.get('/manifests/:roverName', function(req, res) {
  //COMPLETE WITH YOUR CODE
  marsController.getMarsManifests(req, res);
});

module.exports = router;