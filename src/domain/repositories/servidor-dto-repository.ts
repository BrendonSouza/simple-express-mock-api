import { GenericRepository } from '../../core/generics/generic-repository';
import { ServidorDTO } from '../models/servidor-dto';
export class ServidorDTORepository extends GenericRepository<ServidorDTO> {

  constructor() {
    const nomesServidor=["AppServer 01","AppServer 03","Externo","GitLAB","WebServices"]
    const data:ServidorDTO[] = []
    for (let i = 1; i <= nomesServidor.length; i++) {
      let servidor:ServidorDTO = {
        id: i,
        nome: nomesServidor[i-1] ,
        link:'link ' + i,
        recursos:[]  
         
      }
      for (let j = 0; j < 7; j++) {
        servidor.recursos.push({
          id: j+1,
          nome:`recurso ${servidor.nome} ${j}`,
          subtitulo:'subtitulo '+ j,
          descricao:'descricao'+ j
          
        }) 
               
      }     
      console.log(`Foi criado o servidor ${servidor.nome}` ) 
      data.push(servidor)
    }
    super(data)
  }

}