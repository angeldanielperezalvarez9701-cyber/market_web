import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlProducto } from '../modulos/control-producto/form-control-producto/form-control-producto';
import { BusquedaProducos } from '../modulos/control-producto/busqueda-producos/busqueda-producos';
import { ListaProductos } from "../modulos/control-producto/lista-productos/lista-productos";
import { ControlProductoUiService } from '../../services/ui/control-producto-ui-service';
import { InventarioGeneralProductos } from '../modulos/control-producto/inventario-general-productos/inventario-general-productos';
import { FormControlIngresoProducto } from '../modulos/control-producto/form-control-ingreso-producto/form-control-ingreso-producto';
import { Producto } from '../../model/Producto';
import { ControlTipoProducto } from "../modulos/control-producto/control-tipo-producto/control-tipo-producto";
import { TipoProducto } from '../../model/TipoProducto';
import { Router } from '@angular/router';





@Component({
  selector: 'app-control-productos',
  imports: [CommonModule, FormControlProducto, BusquedaProducos, ListaProductos, InventarioGeneralProductos, FormControlIngresoProducto, ControlTipoProducto],
  templateUrl: './control-productos.html',
  styleUrl: './control-productos.css',
  encapsulation: ViewEncapsulation.None
})
export class ControlProductos implements OnInit {

  productoSeleccionado = {} as Producto
  tipoProductoSeleccionado = {} as TipoProducto;

  constructor(public ui: ControlProductoUiService, public router : Router) { }

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

  mostrarControlAlmacenes(event:MouseEvent){
     this.router.navigate(['/control-almacen']);
  }

  recibirProducto(producto : Producto){
    this.productoSeleccionado =  producto
  }

  recibirTipoProducto(tipoProducto : TipoProducto){
    this.ui.tipoProducto =  tipoProducto
  }
}
