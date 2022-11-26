import { Router } from 'express';
import getNeoFeedController from '../controllers/neo.controller.js';
//COMPLETE the router
const neoRouter = Router();
neoRouter.get('/feed', getNeoFeedController);

export default neoRouter;
