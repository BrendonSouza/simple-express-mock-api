import { ComponenteAdmin } from './../models/componente-admin';
import { GenericRepository } from './../../core/generics/generic-repository';

export class ComponenteAdminRepository extends GenericRepository<ComponenteAdmin> {

  constructor() {
    const data:ComponenteAdmin[] = []
    for (let i = 1; i < 8; i++) {
      let item:ComponenteAdmin = {
        id: i,
        nome: 'Componente ' + i,
      }      
      data.push(item)
    }
    super(data)
  }

}