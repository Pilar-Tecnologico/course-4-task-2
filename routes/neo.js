const express = require('express');
const router = express();
const neoController = require('../controllers/neo.controller');

router.get('/neo/', async (req, res, next) => {
  //COMPLETE WITH YOUR CODE
  console.log("Iniciado neo");
  neoController.getNeoFeed(req, res);
});




module.exports = router;
