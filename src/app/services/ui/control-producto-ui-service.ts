import { Injectable, signal, Signal } from '@angular/core';
import { Column } from '../../model/InterfaceUi/TablaProductos';
import { Producto } from '../../model/Producto';
import { TipoProducto } from '../../model/TipoProducto';

@Injectable({
  providedIn: 'root',
})
export class ControlProductoUiService {

  contenedorPricipla: boolean = false;
  contenedorFormulario: boolean = true;
  buscaProducto: boolean = true;
  tipoProductoForm: boolean = true;
  listarProductos: boolean = true;
  contenedorInventario: boolean = true;
  contenedorFormularioControlIngresoProducto: boolean = true;
  cols!: Column[];
  vistaPagina: string = "formulario";
  producto = {} as Producto;
  tipoProducto = {} as TipoProducto;
  products = signal<Producto[]>([]);
  listaTipoProducto = signal<TipoProducto[]>([]);
  loading:boolean=false;

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

  mostrarFormularioTipoProducto() {
    this.contenedorPricipla = true;
    this.listarProductos = true;
    this.tipoProductoForm = false;
  }

  muestraContenedorPrincipal(modulo: string) {

    console.log("MUESTRA CONTENIDO")

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

    if ("listaProductoAgregado" === modulo) {
      this.contenedorFormulario = true;
      this.listarProductos = false;
      this.contenedorPricipla = true
      this.vistaPagina = "formulario"
      this.producto = {} as Producto;
      return
    }
    
    if ("agregarProducto" === modulo) {
      this.contenedorFormulario = true;
      this.listarProductos = false;
      this.contenedorPricipla = true
      this.vistaPagina = "regresaListaProducto"
      return
    }


    if ("regresaListaProducto" === modulo) {

      this.contenedorFormulario = true;
      this.listarProductos = false;
      this.contenedorPricipla = true
      this.producto = {} as Producto;
      this.vistaPagina = "formulario"

    }

    if ("muestraListaOcultaTipoP" === modulo) {
      this.contenedorPricipla = true;
      this.listarProductos = false;
      this.tipoProductoForm = true;
      return;
    }

    this.contenedorPricipla = false;

  }

  updateProducto(pagina: string) {

    if ("activaForm" === pagina) {
      this.listarProductos = true
      this.contenedorFormulario = false
    }
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
