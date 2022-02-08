import { DadosService, dadosService } from '../services';
import { BaseController } from './base.controller';
import { IDadosModel } from '../models';

class DadosController extends BaseController<IDadosModel, DadosService> {
  constructor() {
    super(dadosService, {
      // keys do req.body que serão usados no create
      create: [
        'data',
        'temperatura1',
        'temperatura2',
        'humidade',
      ],
      // keys do req.body que serão usados no update
      update: [
        'data',
        'temperatura1',
        'temperatura2',
        'humidade',
      ],
    });
  }
}

export const dadosController = new DadosController();
