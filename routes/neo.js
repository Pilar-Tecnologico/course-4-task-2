const express = require('express');
const router = express.Router();

const { getNeoFeed } = require('../controllers/neo.controller');

router.get('/feed', async (req, res, next) => {
  //COMPLETE WITH YOUR CODE
  getNeoFeed(req, res)
});


module.exports = router;
