import { Constantes } from "../../../../utils/constantes/Constantes";


export class BusquedaUI {

    ingredient!: string;
    user: any;
    textoInput: String = "";
    textoSamall: String = "";
    inputBusqueda: boolean = true;
    listarProductos: boolean = true
    nombreTitulo: string = Constantes.TITULO_BUQUEDA_PRODUCTO;
    vistaBotonera:boolean=false;

    aplicarOpcion(opcion: string) {

        this.inputBusqueda = false

        if ("1" === opcion) {
            this.textoInput = Constantes.INPUT_BUSQUEDA_CODBARRA;
            this.textoSamall = Constantes.SAMALL_BUSQUEDA_C;

        }

        if ("2" === opcion) {
            this.textoInput = Constantes.INPUT_BUSQUEDA_NOMBRE;
            this.textoSamall = Constantes.SAMALL_BUSQUEDA_N;
        }

        if ("3" === opcion) {
            this.textoInput = Constantes.INPUT_BUSQUEDA_DESCRIPCION;
            this.textoSamall = Constantes.SAMALL_BUSQUEDA_D;
        }
    }

    muestraProducto() {
        this.listarProductos = false;
        this.inputBusqueda = true;
        this.vistaBotonera=true;
    }

   
  

}