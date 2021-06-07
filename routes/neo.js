const express = require('express');
const axios = require('axios').default;
const router = express.Router();
const controllerNeo = require('../controllers/neo.controller');

router.get('/feed', async (req, res, next) => {
  await controllerNeo.getNeoFeed(req, res);
});


module.exports = router;
