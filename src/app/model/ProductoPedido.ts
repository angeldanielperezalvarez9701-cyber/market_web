import { Pedido } from "./Pedido";
import { Producto } from "./Producto";

export interface ProductoPedido{

    idProductoPedido:any,
    Pedido:Pedido,
    producto:Producto,
    cantidadProductos:number,
    precioUnidadProductos:number,
    precioTotalProductos:number
}