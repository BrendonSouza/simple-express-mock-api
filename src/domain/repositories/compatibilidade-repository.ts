import { GenericRepository } from './../../core/generics/generic-repository';
import { CompatibilidadeDTO } from './../models/compatibilidade-dto';

export class CompatibilidadeRepository extends GenericRepository<CompatibilidadeDTO> {

  constructor() {
    const data:CompatibilidadeDTO[] = []
    for (let i = 1; i < 30; i++) {
      let item:CompatibilidadeDTO = {
        id: i,
        nome: 'Compatibilidade ' + i,
        totalComponentes: i * 2,
        totalServicos: i,
        totalServidores: i * 3
      }      
      data.push(item)
    }
    super(data)
  }

}