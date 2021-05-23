import { NumeroDeSerieDTO } from './numero-de-serie-dto';

export interface CaixaDTO{
  id: number;
  capacidade: number;
  descricao: string;
  saldo?: number;
  numerosDeSerie?: NumeroDeSerieDTO[]
}
