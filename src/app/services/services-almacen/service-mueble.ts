import { Injectable, signal } from '@angular/core';
import { Mueble } from '../../model/Mueble';
import { Repisa } from '../../model/Repisa';
import { ApiService } from '../api-service';
import { EndPoitBase } from '../../utils/constantes/EnpoitBase';
import { Error } from '../../pages/error/error';
import { ErrorClient } from '../error-client';
import { TipoMueble } from '../../model/TipoMueble';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Almacen } from '../../model/Almacen';
import { ServiceAlmacenControl } from './service-almacen-control';
import { ControlAlmacenUi } from '../ui/control-almacen-ui';
import { UiGlobal } from '../ui/ui-global';

@Injectable({
  providedIn: 'root',
})
export class ServiceMueble {

  muebles = signal<Mueble[]>([]);
  mueble = {} as Mueble;
  repisas = signal<Repisa[]>([]);
  tipoMueble = signal<TipoMueble[]>([]);
  tipoMuebleObj = {} as TipoMueble;
  guardado: boolean = false;
  eliminado = signal<boolean>(false);
  constructor(private api: ApiService,
    private errorClient: ErrorClient,
    private almacenService: ServiceAlmacenControl,
    public ui: ControlAlmacenUi,
    public uiGlobal: UiGlobal) { }

  objetoMueble(mueble: Mueble): Mueble {

    mueble = {
      idMueble: mueble.idMueble ?? null,
      nombreMueble: mueble.nombreMueble ?? '',
      numeroMueble: mueble.numeroMueble ?? 0,
      descripcionMueble: mueble.descripcionMueble ?? '',
      tipoMueble: mueble.tipoMueble ?? null,
      almacen: mueble.almacen ?? null,
      repisas: mueble.repisas ?? []
    }

    console.log("Mueble ", mueble)

    return mueble;
  }

  objetoTipoMueble(tipoMueble: TipoMueble): TipoMueble {

    tipoMueble = {

      idTipoMueble: tipoMueble.idTipoMueble ?? null,
      nombreTipoMueble: tipoMueble.nombreTipoMueble ?? '',
      descripcionMueble: tipoMueble.descripcionMueble ?? '',
      notasMueble: tipoMueble.nombreTipoMueble ?? ''
    }

    return tipoMueble;

  }

  getTipoMueble() {

    var endpoint = EndPoitBase.URL_TIPO_MUEBLE + EndPoitBase.URL_LISTA_TIPO_MUEBLE;

    this.api.getAll(endpoint).subscribe({
      next: (data => {
        this.tipoMueble.set(data);
        console.log("Data MUEBLE", data)
        this.uiGlobal.activaSpiner.set(false);
      }),
      error: (err => {
        console.log("Err", err);
        this.errorCli(err);
      })
    })
  }

  getTipoMuebleId(tipoM: TipoMueble) {

    var endpoint = EndPoitBase.URL_TIPO_MUEBLE + EndPoitBase.URL_LISTA_XID_TIPO_MUEBLE;
    var idMieble: number = tipoM.idTipoMueble ?? 0;

    console.log("Entramos a listar TM")

    this.api.getById(endpoint, idMieble).subscribe({
      next: (data => {
        setTimeout(() => {
          this.tipoMuebleObj = data;
          this.uiGlobal.activaSpiner.set(false);
          console.log("Data MUEBLE", data)
        });

      }),
      error: (err => {
        console.log("Err", err);
        this.ui.visible = false;
        this.errorCli(err);
        return;
      })

    })

    this.ui.visible = true;



  }


  getAllMuebleXAlmacen(almacen: Almacen) {

    var endpoint = EndPoitBase.URL_MUEBLE + EndPoitBase.URL_LISTA_MUEBLE_X_ALMACEN;
    var idAlmacen: number = almacen.idAlmacen ?? 0;

    console.log("Entramos a listar")

    this.api.getById(endpoint, idAlmacen).subscribe({
      next: (data => {
        this.muebles.set(data);
        this.almacenService.mueblesVista.set(data);
        this.uiGlobal.activaSpiner.set(false);
        console.log("Data MUEBLE", data)
      }),
      error: (err => {
        console.log("Err", err);
        this.errorCli(err);
      })
    })


  }

  getMuebleXId(muebe: Mueble) {

    var endpoint = EndPoitBase.URL_MUEBLE + EndPoitBase.URL_MUEBLE_ID;
    var idMueble: number = muebe.idMueble ?? 0;

    console.log("##INICIA GETMUEBLEXID", idMueble)

    this.api.getById(endpoint, idMueble).subscribe({
      next: (data => {
        this.ui.muestraContenedorMueble("verMueble");
        this.mueble = data;
        console.log("Data MUEBLE", data)
        this.uiGlobal.activaSpiner.set(false);
      }),
      error: (err => {
        this.uiGlobal.activaSpiner.set(false);
        console.log("Err", err);
        this.errorCli(err);
      })
    })


  }

  guardaMuebleConRepiza(mueble: Mueble): Observable<Mueble> {

    var endpoint = EndPoitBase.URL_MUEBLE + EndPoitBase.URL_GUARDA_MUEBLE_REPISA
    console.log("Entrado a guardar mueble")
    return this.api.save(endpoint, mueble).pipe(
      tap(() => {
        this.guardado = true
        this.getAllMuebleXAlmacen(this.almacenService.almacen);
      }), catchError(err => {
        this.errorCli(err);
        return throwError(() => err);
      })
    )

  }

  guardaMueble(mueble: Mueble): Observable<Mueble> {

    var endpoint = EndPoitBase.URL_MUEBLE + EndPoitBase.URL_GUARDA_MUEBLE
    console.log("Entrado a guardar mueble")
    return this.api.save(endpoint, mueble).pipe(
      tap(() => {
        console.log("Mueble Guardado")
        this.guardado = true
        this.getAllMuebleXAlmacen(this.almacenService.almacen);

      }), catchError(err => {
        this.uiGlobal.activaSpiner.set(false);
        this.errorCli(err);
        return throwError(() => err);
      })
    )

  }

  guardaTipoMueble(tipoMueble: TipoMueble): Observable<TipoMueble> {

    var endpoint = EndPoitBase.URL_TIPO_MUEBLE + EndPoitBase.URL_GUARDA_TIPO_MUEBLE;

    console.log("Entrado a guardar TIPO mueble")
    return this.api.save(endpoint, tipoMueble).pipe(
      tap(() => {
        console.log("Tipo Mueble Guardado")
        this.ui.nuevaRepisa = false;
        this.getTipoMueble();

      }), catchError(err => {
        this.uiGlobal.activaSpiner.set(false);
        this.errorCli(err);
        return throwError(() => err);
      })
    )

  }

  eliminaTipoMueble(tipoM : TipoMueble){

     var endpoint = EndPoitBase.URL_TIPO_MUEBLE + EndPoitBase.URL_ELMINA_XID_TIPO_MUEBLE;

     var id = tipoM.idTipoMueble ?? 0;

     this.api.delete(endpoint,id).subscribe({
      next : (data => {
        console.log("Eliminado con exito")
        this.getTipoMueble();
        this.getAllMuebleXAlmacen(this.almacenService.almacen)
        this.eliminado.set(true);
        this.uiGlobal.activaSpiner.set(false);
      }),error:(err => {
        console.log("Error", err);
         this.uiGlobal.activaSpiner.set(false);
        this.eliminado.set(false);
        this.errorCli(err);
      })
     });
    
  }

  errorCli(err: any) {
    this.errorClient.rutaError(err);
  }



  limpia() {
    this.mueble = {} as Mueble
  }

  validaFormExterno(): any {

    if (this.mueble.nombreMueble.length < 4) {

      return "Nombre Mueble no valido";

    }

    if (this.mueble.descripcionMueble.length <= 4) {
      return "Descripción mueble no valida"
    }

    if (this.mueble.numeroMueble === 0) {
      return "Numero de mueble  no valido"
    }

    if (this.mueble.tipoMueble === null) {
      return "Tipo de Mueble requerido"
    }

    return null;
  }

  validaFormExternoTM(): any {

    if (this.tipoMuebleObj.nombreTipoMueble.length < 4) {
      return "Nombre del tipo mueble invalido"
    }

    if (this.tipoMuebleObj.descripcionMueble.length < 4) {
      return "Descripción del tipo de mueble invalida"
    }

    return null;
  }
}
