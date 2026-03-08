import { Usuario } from "./Usuario"

export interface DocumentacionUsuario{

    idDocumentacionUsuario:number
    actaNacimientoDocumentacionUsuario:Uint8Array,
    curpDocumentacion:Uint8Array,
    identificacionOficialDocumentacionUsuario:Uint8Array,
    comprobandeDomicilioDocumentacion:Uint8Array,
    fechaIngresoDocumentacionUsuario:Date,
    usuario:Usuario
}