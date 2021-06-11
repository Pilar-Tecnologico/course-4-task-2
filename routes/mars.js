const express = require('express');
const router = express.Router();

const { getManifest } = require('../controllers/mars.controller');



router.get('/manifest/:roverName', function(req, res) {
  //COMPLETE WITH YOUR CODE
  getManifest(req, res);

});

module.exports = router;
