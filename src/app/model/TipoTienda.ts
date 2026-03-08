import { Tienda } from "./Tienda";

export interface TipoTienda{

    idTipoTienda :number,
    nombreTipoTienda:string,
    descripcionTipoTienda:string,
    tiendas:Tienda[]
}