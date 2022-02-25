const express = require("express");
const { getNeoFeed } = require("../controllers/neo.controller");
const router = express.Router();
//COMPLETE the router
router.get("/feed", getNeoFeed);

module.exports = router;
