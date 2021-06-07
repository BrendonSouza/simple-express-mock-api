import { ServidorCompatibilidadeDTO } from '../models/servidor-compatibilidade-dto';
import { GenericRepository } from './../../core/generics/generic-repository';

export class ServidorCompatibilidadeRepository extends GenericRepository<ServidorCompatibilidadeDTO> {

  constructor() {
    const data:ServidorCompatibilidadeDTO[] = []
    for (let i = 1; i < 30; i++) {
      let item:ServidorCompatibilidadeDTO = {
        id: i,        
        descricao: 'Servidor Compatibilidade ' + i,
        partnumber: 'DJS234' + i,
        slotsPcie: 2,
        slotsSiom: 3,
        valor: i * 1000
      }      
      data.push(item)
    }
    super(data)
  }

}