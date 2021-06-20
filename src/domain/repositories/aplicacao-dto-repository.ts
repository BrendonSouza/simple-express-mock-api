import { AplicacaoDTO } from './../models/aplicacao-dto';
import { GenericRepository } from './../../core/generics/generic-repository';

export class AplicacaoDTORepository extends GenericRepository<AplicacaoDTO> {

  constructor() {
    const data:AplicacaoDTO[] = []
    for (let i = 1; i < 30; i++) {
      let item:AplicacaoDTO = {
        id: i,
        nome: 'Aplicação ' + i ,
        subtitulo:'tecnologia ' + i,
        descricao:'descricao ' + i       
      }      

      data.push(item)
    }
    super(data)
  }

}