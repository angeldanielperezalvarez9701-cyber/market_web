import { Almacen } from "./Almacen";
import { Repisa } from "./Repisa";
import { TipoMueble } from "./TipoMueble";

export interface Mueble{
    idMueble : number,
    nombreMueble : string,
    numeroMueble:number,
    descripcionMueble: string,
    tipoMueble:TipoMueble | any,
    almacen:Almacen | any,
    repisas:Repisa[]
}