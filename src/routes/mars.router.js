const express = require('express');
const router = express.Router();
const { getManifestController } = require("../controllers/mars.controller.js")

//COMPLETE the router, add param name for rover_name 
router.get('/manifests/:name', getManifestController);

module.exports = router;
