import { GenericRepository } from '../../core/generics/generic-repository';
import { NucleoDTO } from '../models/nucleo-dto';
export class NucleoDTORepository extends GenericRepository<NucleoDTO> {

  constructor() {
    const nomesNucleo=["JAVA",".NET","RUBY"]
    const data:NucleoDTO[] = []
    for (let i = 1; i < 4; i++) {
      let nucleo:NucleoDTO = {
        id: i,
        nome: nomesNucleo[i-1] ,
        link:'link ' + i,
        aplicacoes:[]  
         
      }
      for (let j = 0; j < 12; j++) {
        nucleo.aplicacoes.push({
          id: j+1,
          nome:`aplicacao ${nucleo.nome} ${j}`,
          subtitulo:'subtitulo '+ j,
          descricao:'descricao'+ j
          
        }) 
               
      }     
      console.log(`Foi criado o nucleo ${nucleo.nome}` ) 
      data.push(nucleo)
    }
    super(data)
  }

}