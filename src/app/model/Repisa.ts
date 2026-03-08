import { ControlIngresoProducto } from "./ControlIngresoProducto"
import { Mueble } from "./Mueble"

export interface Repisa{
    idRepisa :number,
    nombreRepisa:string
    descripcionRepisa:string,
    controlIngresoProducto:ControlIngresoProducto[],
    mueble:Mueble
}