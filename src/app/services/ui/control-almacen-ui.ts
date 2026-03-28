import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ControlAlmacenUi {

  tipoAlmacenForm: boolean = true;
  cotenedorPrincipal: boolean = false;
  botonUbicacion: boolean = false;
  contenidoUbicacion: boolean = true;
  banderaIntroduceUbicacionSelec: boolean = false;
  visualizadorAlmacen: boolean = true;
  contenidoUbicacionVista: boolean = false;
  opcionLimpieza: string = "";
  botonMuebleAgrega: boolean = true;
  tituloMueble: string = "Control Muebles";
  visible: boolean = false;

  /**
   * Variable para mueble
   */
  titulo: boolean = false;
  agegaTituloExtra: boolean = true;
  textoTitutlo: string = "Mueble"

  muestraLista() {

  }

  muestraFormulario() {
    this.tipoAlmacenForm = false;
    this.cotenedorPrincipal = true;
  }

  muestraContenido() {
    this.tipoAlmacenForm = true;
    this.cotenedorPrincipal = false;

  }

  muestraAlmacenById() {
    this.visualizadorAlmacen = false;
    this.cotenedorPrincipal = true;
  }

  editaubicacionVista() {
    this.contenidoUbicacionVista = true;
    this.contenidoUbicacion = false

  }

  mostarFormularioModalMueble(){
    this.titulo= true;
    this.agegaTituloExtra = false;
  }

  limpiarContenido() {

    if ("formularioPrincipal" === this.opcionLimpieza) {
      this.botonUbicacion = false;
      this.contenidoUbicacion = true;
    }

    if ("formularioSecundario" === this.opcionLimpieza) {
      this.contenidoUbicacionVista = false;
      this.contenidoUbicacion = true;
    }

  }

  salvarUbicaciondeAlmacne() {
    this.botonUbicacion = false;
    this.contenidoUbicacion = false;
  }
}
