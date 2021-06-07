import { ExamModel } from './../models/exam-model';
import { CaixaDTO } from '../models/caixa-dto';
import { GenericRepository } from './../../core/generics/generic-repository';

export class ExamRepository extends GenericRepository<ExamModel> {

  constructor() {
    const data:ExamModel[] = [
      {
        id: 1,
        name: "P. DE FEZES C/ BAERMAN E PESQUISA DE AMEBA E GIARDOA"
      },
      {
        id: 2,
        name: "GGT"
      },
      {
        id: 3,
        name: "F. ALCALINA"
      },
      {
        id: 4,
        name: "BILIRRUBINA T. E FRAÇÕES"
      },
      {
        id: 5,
        name: "AMILASE",
      },
      {
        id: 6,
        name: "MIF ( FEZES 3 AMOSTRAS )"
      },
      {
        id: 7,
        name: "LIPASE"
      },
      {
        id: 8,
        name: "SANGUE OCULTO"
      },
      {
        id: 9,
        name: "P.T E FRAÇÕES"
      },
      {
        id: 10,
        name: "COPROCULTURA"
      },
      {
        id: 11,
        name: "T. DE PROTOMBINA"
      },
      {
        id: 12,
        name: "SUMARIO DE URINA"
      },
      {
        id: 13,
        name: "ALFA FETO PROTEINA"
      },
      {
        id: 14,
        name: "UROCULTURA C/ ANTIBIOGRAMA"
      }
    ]
    super(data)
  }

}