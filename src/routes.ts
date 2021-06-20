import { Router } from 'express';
import { AplicacaoResource } from './domain/resources/aplicacao-dto-resource';
import { NucleoResource } from './domain/resources/nucleo-dto-resource';
import { ServidorResource } from './domain/resources/servidor-dto-resource';

const routes = Router();

// const caixaResource = new CaixaResource()
// routes.use(caixaResource.buildRoutes())

// const compatibilidadeResource = new CompatibilidadeResource()
// routes.use(compatibilidadeResource.buildRoutes())

// const servidorCompatibilidadeResource = new ServidorCompatibilidadeResource()
// routes.use(servidorCompatibilidadeResource.buildRoutes())

// const componenteAdminResource = new ComponenteAdminResource()
// routes.use(componenteAdminResource.buildRoutes())

// const examResource = new ExamResource()
// routes.use(examResource.buildRoutes())

const aplicacaoDTOResource = new AplicacaoResource()
routes.use(aplicacaoDTOResource.buildRoutes())

const NucleoDTOResource = new NucleoResource()
routes.use(NucleoDTOResource.buildRoutes())

const ServidorDTOResource = new ServidorResource()
routes.use(ServidorDTOResource.buildRoutes())

export default routes;