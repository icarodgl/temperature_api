import { userService, UserService } from '../services';
import { BaseController } from './base.controller';
import { IUserModel } from '../models';
import { Request, Response } from 'express';

class UserController extends BaseController<IUserModel, UserService> {
  constructor() {
    super(userService, {
      // keys do req.body que serão usados no create
      create: ['name', 'foto', 'email', 'telefone', 'sobre', 'credito'],
      // keys do req.body que serão usados no update
      update: ['name', 'foto', 'email', 'telefone', 'sobre', 'credito'],
    });
  }

  addCredit = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const { credito } = req.body;
      const reg = await this.service.addCredit(id, credito);
      res.json(reg);
    } catch (error) {
      res.status(400).json(error);
    }
  };
}

export const userController = new UserController();
