import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlProducto } from '../modulos/control-producto/form-control-producto/form-control-producto';
import { BusquedaProducos } from '../modulos/control-producto/busqueda-producos/busqueda-producos';
import { ListaProductos } from "../modulos/control-producto/lista-productos/lista-productos";
import { ControlProductoUiService } from '../../services/ui/control-producto-ui-service';
import { InventarioGeneralProductos } from '../modulos/control-producto/inventario-general-productos/inventario-general-productos';
import { FormControlIngresoProducto } from '../modulos/control-producto/form-control-ingreso-producto/form-control-ingreso-producto';





@Component({
  selector: 'app-control-productos',
  imports: [CommonModule, FormControlProducto, BusquedaProducos, ListaProductos, InventarioGeneralProductos,FormControlIngresoProducto],
  templateUrl: './control-productos.html',
  styleUrl: './control-productos.css',
  encapsulation: ViewEncapsulation.None
})
export class ControlProductos implements OnInit {



  constructor(public ui: ControlProductoUiService) { }

  ngOnInit(): void {

  }

  formularioProducto(event: MouseEvent) {
    this.ui.mostrarFomulario();
  }

  buscarProducto(event: MouseEvent) {
    this.ui.mostrarBusquedaProducto();
  }

  listarProducto(event: MouseEvent) {
    this.ui.mostartListaProducto();
  }

  verInventario(event: MouseEvent){
    this.ui.mostarInventario();
  }

  mostrarFomularioIngreso(event:MouseEvent){
    this.ui.mostrarFomularioIngresos();
  }
}
