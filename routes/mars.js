const express = require('express');
const router = express.Router();
const marsController = require('../controllers/mars.controller');

router.get('/mars/manifests/:roverName', function(req, res) {
  //COMPLETE WITH YOUR CODE
  marsController.getMarsManifest(req, res);
});

module.exports = router;