import { Pedido } from "./Pedido"
import { TipoCliente } from "./TipoCliente"

export interface Cliente{

    idCliente:number,
    nombreCompletoCliente:string,
    correoElectronicoCliente:string,
    numeroTelefonicoCliente:string,
    passwordCiente:string,
    usuarioCliente:string
    fechaNacimientoCliente:Date,
    tipoCliente:TipoCliente,
    pedidos:Pedido[]
}