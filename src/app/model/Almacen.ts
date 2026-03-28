import { InventarioGeneral } from "./InventarioGeneral"
import { Mueble } from "./Mueble"
import { Tienda } from "./Tienda"
import { Ubicacion } from "./Ubicacion"

export interface Almacen{

    idAlmacen :number,
    nombreAlmacen:string
    notasAlmacen:string
    descripcionAlmacen:string,
    eliminarAlmacen:boolean,
    ubicacionDTO:Ubicacion,
    mueblesMuebleDTOS:Mueble[],
    tiendaDTOS:Tienda[],
    inventarioGeneralDTO:InventarioGeneral[]
}