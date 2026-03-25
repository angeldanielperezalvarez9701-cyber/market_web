import { TipoProducto } from "./TipoProducto"

export interface Producto {

    idProducto: number | any,
    nombreProducto: string,
    descripcionProducto: string,
    precioProducto: number,
    precioProductoCompra:number,
    existenciaLogica:boolean,
    stockGeneral:string,
    pesoProducto: string,
    marcaProducto: string,
    codigoBarrasProducto: string,
    subtipoProducto: string,
    statusProducto:string,
    tipoProductoDTO:TipoProducto | any,
    imagenProducto:number[] | any | Uint8Array 

}