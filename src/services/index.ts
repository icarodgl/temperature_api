import { AuthService } from './auth.service';
import { DadosService } from './dados.service';
import { UserService } from './user.service';

const dadosService = new DadosService();
const userService = new UserService();

const authService = new AuthService();

export {
  AuthService,
  authService,
  userService,
  UserService,
  dadosService,
  DadosService,
};
