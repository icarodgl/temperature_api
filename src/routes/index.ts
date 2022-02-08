import { Router } from 'express';
import { pingController } from '../controllers';

import auth from './auth';
import pet from './dados';
import user from './user';
const routes = Router();

// rota de autenticação
routes.use(auth);
routes.use(user);
routes.use(pet);
routes.get('/ping', pingController.ping);

export default routes;
