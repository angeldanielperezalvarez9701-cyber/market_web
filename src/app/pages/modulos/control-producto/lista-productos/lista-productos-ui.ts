import { Column } from "../../../../model/InterfaceUi/TablaProductos";
import { Constantes } from "../../../../utils/constantes/Constantes";

export class ListaProductosUi {

    cols!: Column[];
    botonera: boolean = false;
    texttoTitulo: string = Constantes.TITULO_LISTA_PRODUCTO;

    llenaTablaProducto() {

    }

    columnasTabla() {
        this.cols = [
            { field: 'code', header: 'Code' },
            { field: 'name', header: 'Name' },
            { field: 'category', header: 'Category' },
            { field: 'quantity', header: 'Quantity' }
        ];
    }

    componentesElementoPadre() {
        this.texttoTitulo = Constantes.TITULO_BUQUEDA_PRODUCTO;
        this.botonera = true;
    }


    getSeverity(status: string) {
        switch (status) {
            case 'Stock':
                return 'success';
            case 'LOWSTOCK':
                return 'warn';
            case 'OUTOFSTOCK':
                return 'danger';
        }

        return undefined;
    }


}