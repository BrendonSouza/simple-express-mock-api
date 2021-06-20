import { RecursoDTO } from "./recurso-dto"


export interface ServidorDTO {
  id: number;
  nome: string;
  link:string;
  recursos:RecursoDTO[];
}