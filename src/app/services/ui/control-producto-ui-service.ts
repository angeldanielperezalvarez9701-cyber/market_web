import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ControlProductoUiService {
  
  contenedorPricipla: boolean = false;
  contenedorFormulario: boolean = true;
  buscaProducto: boolean = true;
  listarProductos: boolean = true;


  mostrarFomulario() {
    this.contenedorPricipla = true;
    this.contenedorFormulario = false
  }

  mostrarBusquedaProducto() {
    this.contenedorPricipla = true;
    this.buscaProducto = false;
  }

  mostartListaProducto(){
    this.contenedorPricipla = true;
    this.listarProductos=false;
  }
}
