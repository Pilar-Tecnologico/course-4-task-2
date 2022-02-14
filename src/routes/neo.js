const express = require("express");
const router = express.Router();
const neoController = require("../controllers/neo.controller");

router.get("/feed", neoController.getNeoFeed);

module.exports = router;
