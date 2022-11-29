const express = require("express");
const { getManifestController } = require("../controllers/mars.controller");
const { errorHandler } = require("../middlewares/errorHandler.middleware");
const router = express.Router();

router.get("/manifests/:roverName", getManifestController, errorHandler);

module.exports = router;
