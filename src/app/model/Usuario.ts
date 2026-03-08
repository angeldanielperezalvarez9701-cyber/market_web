import { ControlIngresoProducto } from "./ControlIngresoProducto"
import { DocumentacionUsuario } from "./DocumentacionUsuario"
import { HorarioLaboral } from "./HorarioLaboral"
import { Pedido } from "./Pedido"
import { TipoUsuario } from "./TipoUsuario"
import { Ubicacion } from "./Ubicacion"

export interface Usuario{

    idUsuario :number,
    nombreUsuario:string,
    apellidoMaternoUsuario:string,
    apellidoPaternoUsuario:string,
    edadUsuario:number
    correoElectronicoUsuario:string,
    aliasUsuario:string,
    passwordUsuario:string,
    matriculaUsuario:string,
    ubicacion:Ubicacion,
    tipoUsuario:TipoUsuario,
    ingresosRegistrados:ControlIngresoProducto[],
    horariosLaborales:HorarioLaboral[],
    documentacionUsuario:DocumentacionUsuario
    pedidos:Pedido[]
}