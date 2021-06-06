const express = require('express');
const neoController = require ('../controllers/neo.controller');
const router = express.Router();

router.get('/feed', async (req, res, next) => {
  neoController.getNeoFeed(req, res);
});

module.exports = router;
