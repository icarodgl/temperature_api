import { userController } from './user.controller';
import { petController } from './pet.controller';
import { institutionController } from './institution.controller';
import { transactionController } from './transaction.controller';
import { PingController } from './ping.controller';
import { authController } from './auth.controller';
const pingController = new PingController();
export {
  authController,
  userController,
  petController,
  institutionController,
  transactionController,
  pingController,
};
