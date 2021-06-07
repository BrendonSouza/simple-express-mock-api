import { GenericResource } from './../../core/generics/generic-resource';
import { ComponenteAdmin } from './../models/componente-admin';
import { ComponenteAdminRepository } from './../repositories/componente-admin-repository';

export class ComponenteAdminResource extends GenericResource<ComponenteAdmin> {

  constructor() {
    super('admin/componentes', new ComponenteAdminRepository())
  }

}