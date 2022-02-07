import { checkRole } from '../middlewares/checkRole';
import { Router } from 'express';
import { checkJwt } from '../middlewares/auth.middleware';
import { petController } from '../controllers';

const routes = Router();
const admin = 2;
/**
 * @swagger
 *
 * /pet:
 *   get:
 *     description: pet
 *     produces:
 *       - application/jsong
 *     responses:
 *       200:
 *         description: pet
 */
routes.get('/pet', petController.getAll);
/**
 * @swagger
 *
 * /pet/:id:
 *   get:
 *     description: pet
 *     produces:
 *       - application/jsong
 *     responses:
 *       200:
 *         description: pet
 */
routes.get('/pet/:id', [checkJwt], petController.getOne);
/**
 * @swagger
 *
 * /pet/:id:
 *   put:
 *     description: pet
 *     produces:
 *       - application/jsong
 *     responses:
 *       200:
 *         description: pet
 */
routes.put('/pet/:id', [checkJwt, checkRole(admin)], petController.update);
/**
 * @swagger
 *
 * /pet/:id:
 *   delete:
 *     description: pet
 *     produces:
 *       - application/jsong
 *     responses:
 *       200:
 *         description: pet
 */
routes.delete('/pet/:id', [checkJwt, checkRole(admin)], petController.delete);
/**
 * @swagger
 *
 * /pet:
 *   post:
 *     description: pet
 *     produces:
 *       - application/jsong
 *     responses:
 *       200:
 *         description: pet
 */
routes.post('/pet', [checkJwt], petController.create);

export default routes;
