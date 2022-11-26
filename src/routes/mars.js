import { Router } from 'express';
import getManifestController from '../controllers/mars.controller.js';
//COMPLETE the router
const marsRouter = Router();
marsRouter.get('/manifests/:roverName', getManifestController);

export default marsRouter;
