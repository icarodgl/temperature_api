import { TransactionModel, ITransactionModel } from '../models';
import { BaseService } from './base.service';

export class TransactionService extends BaseService<ITransactionModel> {
  constructor() {
    super(TransactionModel);
  }
}
