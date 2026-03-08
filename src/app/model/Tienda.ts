import { Almacen } from "./Almacen"
import { HorarioLaboral } from "./HorarioLaboral"
import { InventarioGeneral } from "./InventarioGeneral"
import { Pedido } from "./Pedido"
import { TipoTienda } from "./TipoTienda"
import { Ubicacion } from "./Ubicacion"

export interface Tienda{

    idTienda:number,
    nombreTienda:string,
    descripcionTienda:string,
    fechaApertura:Date,
    ubicacion:Ubicacion,
    tipoTienda:TipoTienda,
    horariosLaborales:HorarioLaboral[],
    almacenes:Almacen[],
    pedidos:Pedido[],
    inventarioGenerales:InventarioGeneral[]
}