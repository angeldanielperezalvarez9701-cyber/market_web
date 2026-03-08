import { Usuario } from "./Usuario";

export interface TipoUsuario{

    idTipoUsuario:number,
    nombreTipoUsuario:string,
    descripcionTipoUsuario:string,
    usuarios:Usuario[]
}