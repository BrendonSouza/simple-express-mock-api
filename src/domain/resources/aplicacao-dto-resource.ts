import { GenericResource } from './../../core/generics/generic-resource';
import { AplicacaoDTO } from './../models/aplicacao-dto';
import { AplicacaoDTORepository } from './../repositories/aplicacao-dto-repository';

export class AplicacaoResource extends GenericResource<AplicacaoDTO> {

  constructor() {
    super('aplicacoes', new AplicacaoDTORepository())
  }
}