import { Producto } from "./Producto"
import { Repisa } from "./Repisa"
import { Usuario } from "./Usuario"

export interface ControlIngresoProducto{

    idIngresoProducto:number,
    fechaIngresoProducto : Date,
    cantidadPiezaPorPiezaProducto:number,
    cantidadPorMayoreoProducto:number,
    notasIngresoProductos:string,
    producto:Producto,
    repisa:Repisa,
    usuarios:Usuario[]
}