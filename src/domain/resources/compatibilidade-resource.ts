import { GenericResource } from './../../core/generics/generic-resource';
import { CompatibilidadeDTO } from './../models/compatibilidade-dto';
import { CompatibilidadeRepository } from './../repositories/compatibilidade-repository';

export class CompatibilidadeResource extends GenericResource<CompatibilidadeDTO> {

  constructor() {
    super('compatibilidades', new CompatibilidadeRepository())
  }

}