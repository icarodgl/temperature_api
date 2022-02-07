import { TransactionService, transactionService } from '../services';
import { BaseController } from './base.controller';
import { ITransactionModel } from '../models';

class TransactionController extends BaseController<
  ITransactionModel,
  TransactionService
> {
  constructor() {
    super(transactionService, {
      // keys do req.body que serão usados no create
      create: ['pet_id', 'value', 'date'],
      // keys do req.body que serão usados no update
      update: ['pet_id', 'value', 'date'],
    });
  }
}

export const transactionController = new TransactionController();
