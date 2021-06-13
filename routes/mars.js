const express = require('express');
const router = express.Router();
const marsController = require("../controllers/mars.controller");

router.get('/manifest/:roverName', function(req, res) {
  //COMPLETE WITH YOUR CODE
  const roverName = req.params.roverName;
  marsController.getManifest(req, res);
});

module.exports = router;