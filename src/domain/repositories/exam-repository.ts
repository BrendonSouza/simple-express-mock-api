import { CaixaDTO } from '../models/caixa-dto';
import { GenericRepository } from './../../core/generics/generic-repository';

export class CaixaRepository extends GenericRepository<CaixaDTO> {

  constructor() {
    const caixas:CaixaDTO[] = []
    for (let i = 1; i < 30; i++) {
      let caixa:CaixaDTO = {
        id: i,
        capacidade: i * 4,
        descricao: `Caixa ${i}`,
        saldo: i *2,
        numerosDeSerie: []
      }
      for (let j = 0; j < caixa.saldo; j++) {
        caixa.numerosDeSerie.push({
          id: Number(`${i}${j}`),
          codigo: j + 'XZC' + i
        })      
      }
      caixas.push(caixa)
    }
    super(caixas)
  }

}