import { Almacen } from "./Almacen"
import { InventarioProducto } from "./InventarioProducto"
import { Tienda } from "./Tienda"

export interface InventarioGeneral{

    idInventarioGeneral: number,
    notasInventarioGeneral:string,
    tipoCorteInventarioGeneral:string,
    fechaInicialInventarioGeneral:Date,
    fechaCorteInventarioGeneral:Date,
    almacen:Almacen,
    tienda:Tienda,
    inventarioProductos:InventarioProducto[]
}