import { IUserModel } from './../models/user.model';
import { AuthModel, IAuthModel, UserModel } from '../models';
import { BaseService } from './base.service';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { authConfig } from '../config';
export class AuthService extends BaseService<IAuthModel> {
  constructor() {
    super(AuthModel);
  }
  async login(username: string, password: string) {
    try {
      const auth = await this.BaseModel.findOne({ username: username }).exec();
      if (auth && auth.username != null && auth.password != null) {
        if (!this.checkIfPasswordIsValid(password, auth.password)) {
          throw { message: 'usuário ou senhas não correspondem' };
        }

        const token = jwt.sign(
          { userId: auth.id, username: auth.username },
          authConfig.jwtSecret,
          { expiresIn: '90d' },
        );
        let user;
        try {
          user = await UserModel.findById(auth.user).exec();
        } catch (error) {
          user = {};
        }
        return { token: token, role: auth.role, user: user };
      } else {
        throw { message: 'usuário ou senhas não correspondem' };
      }
    } catch (error) {
      throw error;
    }

    //Send the jwt in the response
  }

  async newUser(
    username: string,
    password: string,
    role: number,
    perfil: IUserModel,
  ) {
    let user = new AuthModel();
    user.username = username;
    user.password = await this.hashPassword(password);
    user.role = role ? role : 1;
    try {
      let hasUser = await this.BaseModel.findOne({
        username: user.username,
      }).exec();
      if (hasUser != null) {
        throw { message: 'usuário já cadastrado' };
      }
    } catch (error) {
      throw error;
    }
    try {
      try {
        perfil.credito = 0;
        const newPerfil = await UserModel.create(perfil);
        user.user = newPerfil.id;
      } catch (error) {
        throw { message: 'Erro ao criar user' };
      }
      const res = await this.BaseModel.create(user);

      return res;
    } catch (error) {
      throw error;
    }
  }

  async hashPassword(unCripted: string) {
    return bcrypt.hashSync(unCripted, 10);
  }

  checkIfPasswordIsValid(pass: string, hash: string) {
    return bcrypt.compareSync(pass, hash);
  }
}
