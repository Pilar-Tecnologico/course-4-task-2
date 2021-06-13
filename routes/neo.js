const express = require('express');
const router = express.Router();
const axios = require('axios').default;
const controllerNeo = require('../controllers/neo.controller');

router.get('/feed', async (req, res, next) => {
  //COMPLETE WITH YOUR CODE
  await controllerNeo.getNeoFeed(req, res);
});

module.exports = router;
