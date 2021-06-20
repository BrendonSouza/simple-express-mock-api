import { GenericResource } from '../../core/generics/generic-resource';
import { NucleoDTO } from '../models/nucleo-dto';
import { NucleoDTORepository } from '../repositories/nucleo-dto-repository';

export class NucleoResource extends GenericResource<NucleoDTO> {

  constructor() {
    super('nucleos', new NucleoDTORepository())
  }
}