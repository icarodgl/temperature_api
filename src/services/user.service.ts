import { ObjectId } from 'mongoose';
import { UserModel, IUserModel } from '../models';
import { BaseService } from './base.service';
export class UserService extends BaseService<IUserModel> {
  constructor() {
    super(UserModel);
  }
}
