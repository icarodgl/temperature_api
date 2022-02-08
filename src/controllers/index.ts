import { dadosController } from './dados.controller';
import { PingController } from './ping.controller';
import { authController } from './auth.controller';
import {userController} from './user.controller'
const pingController = new PingController();
export {
  authController,
  dadosController,
  pingController,
  userController
};
