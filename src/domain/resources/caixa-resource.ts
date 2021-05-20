import { CaixaRepository } from './../repositories/caixa-repository';
import { CaixaDTO } from './../models/caixa-dto';
import { GenericResource } from './../../core/generics/generic-resource';

export class CaixaResource extends GenericResource<CaixaDTO> {

  constructor() {
    super('caixas', new CaixaRepository())
  }

}