const express = require('express');
const router = express.Router();
const axios = require('axios').default;
const controllerMars = require ('../controllers/mars.controller'); 

router.get('/manifests/:roverName', async function(req, res) {
  //COMPLETE WITH YOUR CODE 
  await controllerMars.getManifest(req, res);
});

module.exports = router;
