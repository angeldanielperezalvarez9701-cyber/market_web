import { Column } from "../../../../model/InterfaceUi/TablaProductos";

export class ListaProductosUi {

    cols!: Column[];
    loading: boolean = false;


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

    


}