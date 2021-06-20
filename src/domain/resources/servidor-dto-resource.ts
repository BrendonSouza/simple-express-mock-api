import { GenericResource } from '../../core/generics/generic-resource';
import { ServidorDTO } from '../models/servidor-dto';
import { ServidorDTORepository } from '../repositories/servidor-dto-repository';

export class ServidorResource extends GenericResource<ServidorDTO> {

  constructor() {
    super('servidores', new ServidorDTORepository())
  }
}