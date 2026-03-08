import { Mueble } from "./Mueble"

export interface TipoMueble{
    idTipoMueble:number
    nombreTipoMueble:string,
    descripcionMueble:string,
    notasMueble:string
    mueble:Mueble[]
}