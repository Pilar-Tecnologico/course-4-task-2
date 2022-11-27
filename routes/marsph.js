const express = require('express');
const router = express.Router();
const marsphController = require('../controllers/marsphotos.controller');

router.get('/mars/photos/:roverName', function(req, res) {
  //COMPLETE WITH YOUR CODE
  console.log(req);
  marsphController.getMarsPhotos(req, res);
});

module.exports = router;