const express = require('express');
const router = express.Router();
const {getManifestController} = require('../../controllers/nasa/marsApiController')
const {errorHandler} = require('../../middlewares/errorHandlerMiddleware')

router.get('/manifests/:roverName', getManifestController, errorHandler);

module.exports = router;
