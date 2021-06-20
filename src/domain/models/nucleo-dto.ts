import { AplicacaoDTO } from "./aplicacao-dto";


export interface NucleoDTO {
  id: number;
  nome: string;
  link:string;
  aplicacoes:AplicacaoDTO[];
}