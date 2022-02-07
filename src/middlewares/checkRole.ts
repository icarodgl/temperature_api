import { IAuthModel } from './../models/auth.model';
import { Request, Response, NextFunction } from 'express';
import { authService } from '../services';

const checkRole = (role: number) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await getRole(res, next, role);
  };
};

const getRole = async (res: Response, next: NextFunction, role: number) => {
  const id = res.locals.jwtPayload.userId;
  try {
    let user;
    user = await authService.getById(id);
    if (user && user.role === role) next();
    else res.status(401).send();
  } catch (id) {
    throw { message: 'Erro, role não autorizada para acessar a rota' };
  }
};

export { checkRole };
