const express = require('express');
const router = express.Router();
const marsController = require('../controllers/mars.controller');


router.get('/manifests/:roverName', function(req, res) {
  marsController.getManifest(req, res);
});



// router.get('/manifests/:roverName', function(req, res) {
//   //COMPLETE WITH YOUR CODE
// });

module.exports = router;
