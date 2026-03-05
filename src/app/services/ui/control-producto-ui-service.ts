import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ControlProductoUiService {
  
  contenedorPricipla: boolean = false;
  contenedorFormulario: boolean = true;
  buscaProducto: boolean = true;
  listarProductos: boolean = true;
  contenedorInventario:boolean=true;


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

  mostarInventario(){
    this.contenedorPricipla = true;
    this.contenedorInventario=false
  }

  muestraContenedorPrincipal(modulo:string){

    if("buscaProducto" === modulo){
       this.buscaProducto=true
    }

    if("formulario" === modulo){
      this.contenedorFormulario=true;
    }

    if("listaProducto" === modulo){
      this.listarProductos=true;
    }

    if("inventario" === modulo){
      this.contenedorInventario=true;
    }
    this.contenedorPricipla=false;

  }
}
