import { Injectable, signal } from '@angular/core';

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
  agregarRepisa: boolean = true;
  botonRepisa: boolean = false;
  contenidoAOcultarRepisa: boolean = false;
  formularioObjetoActivado: string = ""
  /**
   * Variable para mueble
   */
  titulo: boolean = false;
  agegaTituloExtra: boolean = true;
  textoTitutlo: string = "Mueble"


  visualizaMueble: boolean = true;
  contenedorMueble: boolean = false;
  editaTipo: boolean = false;

  nuevaRepisa:boolean= false;
  nuevoTipoProducto:boolean=false;
  
  tabActivo = signal<string> ("0");
  verRepisass = signal<boolean> (false);

  muestraLista() {

  }

  muestraContenedorMueble(opcion: string) {

    if ("verMueble" === opcion) {

      this.contenedorMueble = true;
      this.visualizaMueble = false;

      return;

    }

    if ("verContenedor" === opcion) {

      this.contenedorMueble = false;
      this.visualizaMueble = true;

      return;

    }

     if ("verRepisa" === opcion) {
      this.contenedorMueble = true;
      this.visualizaMueble = true;
      this.verRepisass.set(true);
      return;
    }

    if("verMueblePost" === opcion){
      this.contenedorMueble = true;
      this.visualizaMueble = false;
      this.verRepisass.set(false);
      return;
    }

    if("getById" === opcion){

      this.contenedorMueble = false;
      this.visualizaMueble = false;
      this.verRepisass.set(false);
      return

    }

   


  }

  muestraFormulario() {
    this.tipoAlmacenForm = false;
    this.cotenedorPrincipal = true;
  }

  muestraModalAgregarMueble(){
    this.formularioObjetoActivado = "formularioObjetoActivado";
    this.nuevoTipoProducto = true;
    this.mostarFormularioModalMueble();
    this.nuevaRepisa = true;
    this.visible = true
  }

  muestraContenidoPrincipal(vista: string) {

    if ("retrocede" === vista) {
      this.visualizadorAlmacen = true;
    }

    this.cotenedorPrincipal = false;
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

  mostarFormularioModalMueble() {
    this.titulo = true;
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

  muestraContenidoRepisa() {

    this.agregarRepisa = false;

  }

  salvarUbicaciondeAlmacne() {
    this.botonUbicacion = false;
    this.contenidoUbicacion = false;
  }
}
