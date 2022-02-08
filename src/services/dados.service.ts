import { DadosModel, IDadosModel } from '../models';
import { BaseService } from './base.service';

export class DadosService extends BaseService<IDadosModel> {
  constructor() {
    super(DadosModel);
  }
}
