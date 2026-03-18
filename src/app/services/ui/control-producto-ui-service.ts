import { Injectable } from '@angular/core';
import { Column } from '../../model/InterfaceUi/TablaProductos';

@Injectable({
  providedIn: 'root',
})
export class ControlProductoUiService {

  contenedorPricipla: boolean = false;
  contenedorFormulario: boolean = true;
  buscaProducto: boolean = true;
  listarProductos: boolean = true;
  contenedorInventario: boolean = true;
  contenedorFormularioControlIngresoProducto: boolean = true;
 cols!: Column[];

  mostrarFomulario() {
    this.contenedorPricipla = true;
    this.contenedorFormulario = false
  }

  mostrarBusquedaProducto() {
    this.contenedorPricipla = true;
    this.buscaProducto = false;
  }

  mostartListaProducto() {
    this.contenedorPricipla = true;
    this.listarProductos = false;
  }

  mostarInventario() {
    this.contenedorPricipla = true;
    this.contenedorInventario = false
  }

  mostrarFomularioIngresos() {
    this.contenedorPricipla = true;
    this.contenedorFormularioControlIngresoProducto = false
  }

  muestraContenedorPrincipal(modulo: string) {

    if ("buscaProducto" === modulo) {
      this.buscaProducto = true
    }

    if ("formulario" === modulo) {
      this.contenedorFormulario = true;
    }

    if ("listaProducto" === modulo) {
      this.listarProductos = true;
    }

    if ("inventario" === modulo) {
      this.contenedorInventario = true;
    }

    this.contenedorPricipla = false;

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
