const express = require('express');
const router = express.Router();
const {getManifest} = require("../controllers/mars.controller");

router.get('/manifests/:roverName', function(req, res) {
  getManifest(req, res);
});

module.exports = router;
