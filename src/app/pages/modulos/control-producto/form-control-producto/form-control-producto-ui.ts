import { Producto } from "../../../../model/Producto";

export class FormConrolProductoUI {

    subtipoProducto: Array<any> = [];
    producto = {} as Producto;
    

    subtipoProductoList(): Array<any> {

        this.subtipoProducto = [
            { name: 'Leche', code: '1' },
            { name: 'Quesos', code: '2' },
            { name: 'Legumbres', code: '3' },
            { name: 'Granos', code: '4' },
            { name: 'Fideos', code: '5' },
            { name: 'Arinas', code: '6' },
            { name: 'Pastas', code: '7' },
            { name: 'Barras / Tablillas', code: '8' },
            { name: 'Detergentes en polvo', code: '9' },
            { name: 'Detergentes liquidos', code: '10' },

        ]

        return this.subtipoProducto;

    }

    generaProductoObject(product : Producto | any): Producto {

        this.producto = {
            idProducto:product.idProducto ?? null,
            nombreProducto:product.nombreProducto ?? '',
            descripcionProducto:  product.descripcionProducto ??'',
            precioProducto: product.precioProducto ??  0.0,
            precioProductoCompra: product.precioProductoCompra ?? 0.0,
            existenciaLogica: product.existenciaLogica ??  true,
            stockGeneral:  product.stockGeneral ?? '',
            pesoProducto: product.pesoProducto ?? '',
            marcaProducto:  product.marcaProducto ?? '',
            codigoBarrasProducto: product.codigoBarrasProducto ??  '',
            subtipoProducto: product.subtipoProducto ?? '',
            statusProducto: product.statusProducto ?? '',
            tipoProductoDTO: product.tipoProductoDTO ?? null,
            imagenProducto: product.imagenProducto ?? null
        }

        return this.producto;
    }
}