import { ExamRepository } from './../repositories/caixa-repository';
import { ExamModel } from './../models/exam-model';
import { GenericResource } from './../../core/generics/generic-resource';
import { CaixaDTO } from './../models/caixa-dto';

export class ExamResource extends GenericResource<ExamModel> {

  constructor() {
    super('exams', new ExamRepository())
  }

  // funcao(parametro:any):parametro is CaixaDTO {    
  // }

  // funcao(parametro:any):parametro is NumeroDeSerieDTO {
  // }

}