const express = require('express');
const router = express.Router();
const neoController = require('../controllers/neo.controller');

router.get('/feed', async (req, res, next) => {
  neoController.getNeoFeed(req, res);
});


module.exports = router;
