import { checkRole } from '../middlewares/checkRole';
import { Router } from 'express';
import { checkJwt } from '../middlewares/auth.middleware';
import { transactionController } from '../controllers';
const routes = Router();
const admin = 2;
/**
 * @swagger
 *
 * /transaction:
 *   get:
 *     description: update one transaction
 *     produces:
 *       - application/jsong
 *     responses:
 *       200:
 *         description: transaction sucess
 */
routes.get('/transaction', [checkJwt], transactionController.getAll);
/**
 * @swagger
 *
 * /transaction/:id/:
 *   get:
 *     description: update one transaction
 *     produces:
 *       - application/jsong
 *     responses:
 *       200:
 *         description: transaction sucess
 */
routes.get('/transaction/:id', [checkJwt], transactionController.getOne);
/**
 * @swagger
 *
 * /transaction/:id/:
 *   put:
 *     description: update one transaction
 *     produces:
 *       - application/jsong
 *     responses:
 *       200:
 *         description: transaction sucess
 */
routes.put('/transaction/:id', [checkJwt], transactionController.update);
/**
 * @swagger
 *
 * /transaction/:id:
 *   delete:
 *     description: update one transaction
 *     produces:
 *       - application/jsong
 *     responses:
 *       200:
 *         description: transaction sucess
 */
routes.delete(
  '/transaction/:id',
  [checkJwt, checkRole(admin)],
  transactionController.delete,
);
/**
 * @swagger
 *
 * /transaction/:id:
 *   post:
 *     description: update one transaction
 *     produces:
 *       - application/jsong
 *     responses:
 *       200:
 *         description: transaction sucess
 */
routes.post('/transaction', transactionController.create);

export default routes;
