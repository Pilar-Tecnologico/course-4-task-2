const express = require("express");
const router = express.Router();
const marsControllers = require("../controllers/mars.controller");
//COMPLETE the router

router.get("/manifests/:roverName", marsControllers.getManifest);

module.exports = router;
