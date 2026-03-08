import { Tienda } from "./Tienda"
import { Usuario } from "./Usuario"

export interface HorarioLaboral{

    idHorarioLaboral:number,
    entradaHorarioLaboral:Date,
    salidaHorarioLaboral:Date,
    notasHorarioLaboral:string,
    retardoHorarioLaboral:number,
    usuario:Usuario,
    tienda:Tienda
}