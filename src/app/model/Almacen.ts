import { InventarioGeneral } from "./InventarioGeneral"
import { Mueble } from "./Mueble"
import { Tienda } from "./Tienda"
import { Ubicacion } from "./Ubicacion"

export interface Almacen{

    idAlmacen :number,
    nombreAlmacen:string
    notasAlmacen:string
    descripcionAlmacen:string
    ubicacion:Ubicacion,
    muebles:Mueble[],
    tiendas:Tienda[],
    inventarioGeneral:InventarioGeneral[]
}