import { Router } from 'express';
import { CaixaResource } from './domain/resources/caixa-resource';

const routes = Router();

const caixaResource = new CaixaResource()
routes.use(caixaResource.buildRoutes())

export default routes;