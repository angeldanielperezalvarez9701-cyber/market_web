import { Cliente } from "./Cliente";

export interface TipoCliente {

    idTipoCliente:number,
    nombreTipoCliente:string,
    descripcionTipoCliente:string,
    clientes:Cliente[],
    creditoDisponiblePorTipoCliente:number
}