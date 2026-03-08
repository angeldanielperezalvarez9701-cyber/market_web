import { Cliente } from "./Cliente"
import { ProductoPedido } from "./ProductoPedido"
import { Tienda } from "./Tienda"
import { TipoPedido } from "./TipoPedido"
import { Ubicacion } from "./Ubicacion"
import { Usuario } from "./Usuario"

export interface Pedido{

    idPedido:number,
    codigoPedido:string,
    fechaPedido:Date,
    fechaEntregaPedido:Date,
    estatusPedido:number,
    montoTotalPago:number,
    prioridadPedido:number,
    notasPedido:string,
    facturacionRequeridaPedido:boolean,
    usuario:Usuario,
    cliente:Cliente,
    ubicacion:Ubicacion,
    tienda:Tienda,
    tipoPedido:TipoPedido,
    servicios:any,
    productoPedidos:ProductoPedido[]
}