import { Router } from 'express';
import { renderHomePage } from '../controllers/homePageController.js';


const homeRouter = Router();

homeRouter.get('/home', renderHomePage)

export default homeRouter;