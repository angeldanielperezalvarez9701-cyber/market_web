import { InventarioGeneral } from "./InventarioGeneral"
import { Producto } from "./Producto"

export interface InventarioProducto{

    inventarioProductoPK :any,
    producto:Producto,
    inventarioGeneral:InventarioGeneral,
    cantidadInicialInventarioProducto:number,
    cantidadActualInventarioProducto:number,
    cantidadMinimaInventarioProducto:number,
    fechaRegistroInventarioProducto:Date
    fechaRegistroActualizadoInventarioProducto:Date
}