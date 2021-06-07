const express = require('express');
const axios = require('axios').default;
const router = express.Router();
const controllerMars = require('../controllers/mars.controller');

router.get('/manifests/:roverName', async function (req, res) {
  await controllerMars.getManifest(req, res);
});

module.exports = router;
