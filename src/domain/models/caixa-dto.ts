import { GenericEntity } from './../../core/models/generic-entity';
import { NumeroDeSerieDTO } from './numero-de-serie-dto';

export interface CaixaDTO extends GenericEntity{
  capacidade: number;
  descricao: string;
  saldo?: number;
  numerosDeSerie?: NumeroDeSerieDTO[]
}
