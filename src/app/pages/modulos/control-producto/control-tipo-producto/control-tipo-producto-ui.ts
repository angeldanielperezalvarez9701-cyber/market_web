import { TipoProducto } from "../../../../model/TipoProducto";

export class ControlTipoProductoUi{


    tipoProductoObject(tipoProducto : TipoProducto | any) : TipoProducto{

        tipoProducto = {
            idTipoProducto: tipoProducto.idTipoProducto ?? null,
            nombreTipoProducto: tipoProducto.nombreTipoProducto ?? '',
            descripcionProducto: tipoProducto.descripcionProducto ?? ''
        }

        return tipoProducto;

    }

}