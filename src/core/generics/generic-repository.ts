import { PageHelper } from './../helpers/page-helper';
import { Page } from "../models/page"

export class GenericRepository<T> {

  private collection:T[] | any[]

  constructor(collection:T[]){
    this.collection = collection
  }

  findAll(): T[] {
    return this.collection    
  }

  findById(id: number): T {
    return this.collection.filter(entity => entity.id === id)[0]
  }

  findAllPaged(page: number, size: number): Page<T> {
    return PageHelper.buildPage<T>(page, size, this.collection)
  }

  create(body: T): T {
    this.collection.push(body)
    return body    
  }

  update(body: T | any): T {
    let index = this.collection.findIndex(entity => entity.id === body.id)
    if(index){
      this.collection[index] = body
    }
    return body
  }

  delete(id: number): void {
    let index = this.collection.findIndex(entity => entity.id === id)
    if(index){
      this.collection.splice(index, 1)
    }  
  }

}