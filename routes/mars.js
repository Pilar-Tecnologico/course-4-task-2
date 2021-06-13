const express = require("express");
const router = express.Router();
const marsController = require("../controllers/mars.controller");

router.get("/manifests/:roverName", (req, res) => {
  marsController.getManifest(req, res);
});

module.exports = router;
