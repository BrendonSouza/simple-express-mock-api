import { ServidorCompatibilidadeDTO } from '../models/servidor-compatibilidade-dto';
import { ServidorCompatibilidadeRepository } from '../repositories/servidor-compatibilidade-repository';
import { GenericResource } from './../../core/generics/generic-resource';

export class ServidorCompatibilidadeResource extends GenericResource<ServidorCompatibilidadeDTO> {

  constructor() {
    super('servidores-compatibilidades', new ServidorCompatibilidadeRepository())
  }

}