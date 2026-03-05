import { TipoProducto } from "./TipoProducto"

export interface Producto {

    idProducto: number,
    nombreProducto: string,
    descripcionProducto: string,
    precioProducto: number,
    pesoProducto: string,
    marcaProducto: string,
    codigoBarrasProducto: string,
    subtipoProducto: string,
    statusProducto:string,
    tipoProducto:TipoProducto,
    total: number

}