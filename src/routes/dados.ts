// import { checkRole } from '../middlewares/checkRole';
import { Router } from 'express';
// import { checkJwt } from '../middlewares/auth.middleware';
import { dadosController } from '../controllers';

const routes = Router();
// const admin = 2;

routes.get('/dados', dadosController.getAll);

routes.post('/dados', dadosController.create);

// routes.get('/dados/:id', [checkJwt], dadosController.getOne);

// routes.put('/dados/:id', [checkJwt, checkRole(admin)], dadosController.update);

// routes.delete('/dados/:id', [checkJwt, checkRole(admin)], dadosController.delete);



export default routes;
