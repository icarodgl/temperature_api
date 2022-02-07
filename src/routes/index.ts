import { Router } from 'express';
import { pingController } from '../controllers';

import auth from './auth';
import pet from './pet';
import user from './user';
import institution from './institution';
import transaction from './transaction';
const routes = Router();

// rota de autenticação
routes.use(auth);
routes.use(user);
routes.use(institution);
routes.use(transaction);
routes.use(pet);
/**
 * @swagger
 *
 * /:
 *   get:
 *     description: ping
 *     produces:
 *       - application/jsong
 *     responses:
 *       200:
 *         description: ping
 */
routes.get('/ping', pingController.ping);

// routes.get('/*', pingController.error);

export default routes;
