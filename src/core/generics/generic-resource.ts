import express, { Router } from 'express';
import { GenericRepository } from './generic-repository';

export class GenericResource<T>{

  public router: Router
  protected repository: GenericRepository<T> 
  
  constructor(
    private rootUri: string, 
    repository: GenericRepository<T>, 
  ){
    this.repository = repository
    this.router = express.Router()
  }

  public getRootUri(): string {
    return this.rootUri
  }

  public buildRoutes(): Router {
    this.router.get(`/${this.rootUri}/:id`, (req, res) => {
      const id = Number(req.params.id)
      return (id) ? res.json(this.repository.findById(id)) : null
    })
    this.router.get(`/${this.rootUri}`, (req, res) => {
      const page = (req.query.page) ? Number(req.query.page) : 0
      const size = (req.query.size) ? Number(req.query.size) : 12
      return res.json(this.repository.findAllPaged(page, size))
    });
    this.router.get(`/${this.rootUri}/all`, (req, res) => {
      return res.json(this.repository.findAll())
    })
    this.router.post(`/${this.rootUri}`, (req, res) => {
      const body:T = req.body
      return res.json(this.repository.create(body))
    })
    this.router.put(`/${this.rootUri}/:id`, (req, res) => {
      const id = Number(req.params.id)
      const body:T = {...req.body, id}
      return res.json(this.repository.update(body))
    })
    this.router.delete(`/${this.rootUri}/:id`, (req, res) => {
      const id = Number(req.params.id)
      return (id) ? res.json(this.repository.delete(id)) : null
    })
    return this.router
  }

}