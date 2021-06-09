const express = require('express');
const router = express.Router();
const {getNewFeed} = require("../controllers/neo.controller");

router.get('/feed', async (req, res, next) => {
  getNewFeed(req, res);
});


module.exports = router;
