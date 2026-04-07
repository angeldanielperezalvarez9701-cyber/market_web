export class EndPoitBase {

    /**
     * URL PARA PRODUCTOS
     */
    static readonly URL_PRODUCTO: string = "product/";
    static readonly URL_LISTA_PRODUCTO = "listProduct";
    static readonly URL_SALVA_PRODUCTO = "producSave";
    static readonly URL_ELIMINA_LOGICO_PRODUCTO = "eliminacionLogica";

    /**
     * TipoProducto
     */
    static readonly URL_BASE_TIPO_PRODUCTO = "tipProduct/";
    static readonly URL_LISTA_TIPO_PRODUCTO = "listTipoProd";
    static readonly URL_SALVA_TIPO_PRODUCTO = "productSave";
    static readonly URL_ELIMINAR_TIPO_PRODUCTO = "eliminaTipo";


    /**
     * Almacen
     */

    static readonly URL_ALMACEN = "almacen/";
    static readonly URL_GUARDAR_ALMACEN = "saveAlmacen"; 
    static readonly URL_LISTA_ALMACEN = "finAllAlm";
    static readonly URL_FINDBY_ID_ALMACEN = "almacen";
    static readonly URL_DELETE_ALMACEN = "deleteLogico";

    /**
     * TipoMueble
     */
    static readonly URL_TIPO_MUEBLE = "tipoMueble/";
    static readonly URL_GUARDA_TIPO_MUEBLE = "saveTipoMu";
    static readonly URL_LISTA_TIPO_MUEBLE = "listaAllTipMu";
    static readonly URL_LISTA_XID_TIPO_MUEBLE = "tpm";
    static readonly URL_ELMINA_XID_TIPO_MUEBLE = "eliminartmp";


    /**
     * Mueble
     */
    static readonly URL_MUEBLE = "mueble/";
    static readonly URL_MUEBLE_ID = "mubleXId";
    static readonly URL_GUARDA_MUEBLE = "saveMueble";
    static readonly URL_GUARDA_MUEBLE_REPISA = "guardarConRepisa";
    static readonly URL_LISTA_MUEBLE = "allMueble";
    static readonly URL_LISTA_MUEBLE_X_ALMACEN = "muebleXAlmacen";

      /**
     * Repisa
     */
    static readonly URL_REPISA = "repisa/";
    static readonly URL_GUARDA_REPISA = "saveRepisa";
    static readonly URL_REPISA_LIST_X_MUEBLE = "getXMueble";
    static readonly URL_REPISA_LIST_X_ID = "porRepisa";
    static readonly URL_ELIMINA_REPISA = "elimina";



}