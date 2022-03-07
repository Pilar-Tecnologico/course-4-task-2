const express = require("express");
const router = express.Router();
const marsController = require("../controllers/mars.controller");

router.get("/manifest/:roverName", marsController.getManifest);

module.exports = router;
