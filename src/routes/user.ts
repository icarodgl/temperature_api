import { Router } from 'express';
import { checkJwt } from '../middlewares/auth.middleware';
import { userController } from '../controllers';
const routes = Router();

/**
 * @swagger
 *
 * /user:
 *   get:
 *     description: get a user
 *     produces:
 *       - application/json

 *     responses:
 *       200:
 *         description: login
 */
routes.get('/user', [checkJwt], userController.getAll);

routes.get('/user/:id', [checkJwt], userController.getOne);

export default routes;
