import { inject, Injectable, signal, Signal } from '@angular/core';
import { Almacen } from '../../model/Almacen';
import { ApiService } from '../api-service';
import { EndPoitBase } from '../../utils/constantes/EnpoitBase';
import { MessageService } from 'primeng/api';
import { ErrorClient } from '../error-client';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { UiGlobal } from '../ui/ui-global';
import { Mueble } from '../../model/Mueble';

@Injectable({
  providedIn: 'root',
})
export class ServiceAlmacenControl {

  almacenes = signal<Almacen[]>([]);
  almacen = {} as Almacen;
  loading: boolean = false;
  messageService = inject(MessageService);
  almacenRederizado=signal<boolean> (false);
  mueblesVista = signal<Mueble[]>([]);

  constructor(private api: ApiService, private errorHttp: ErrorClient,public uiGlobal :UiGlobal) { }


  objetoAlmacen(almacen: Almacen): Almacen {

    almacen = {

      idAlmacen: almacen.idAlmacen ?? null,
      nombreAlmacen: almacen.nombreAlmacen ?? "",
      notasAlmacen: almacen.notasAlmacen ?? '',
      descripcionAlmacen: almacen.descripcionAlmacen ?? '',
      eliminarAlmacen :almacen.eliminarAlmacen ?? true,
      ubicacion: almacen.ubicacion ?? null,
      muebles: almacen.muebles ?? [],
      tiendaDTOS: almacen.tiendaDTOS ?? [],
      inventarioGeneralDTO: almacen.inventarioGeneralDTO ?? []

    }

    return almacen;
  }

  getAlmacen() {
    var endPoit = EndPoitBase.URL_ALMACEN + EndPoitBase.URL_LISTA_ALMACEN;

    this.api.getAll(endPoit).subscribe({
      next: (data => {
        this.almacenes.set(data);
      }), error: (err => {
        console.log("Error", err);
        this.errorResponse(err);
      })
    })

  }

  getById(idAlmacen: number) {

    var endpoint = EndPoitBase.URL_ALMACEN + EndPoitBase.URL_FINDBY_ID_ALMACEN;

    this.api.getById(endpoint, idAlmacen).subscribe({
      next: (data => {
        console.log("GET BY ID", data);
        this.almacen = data
        this.almacenRederizado.set(true);
        this.uiGlobal.activaSpiner.set(false);
        this.mueblesVista.set(this.almacen.muebles);
      }),
      error: (err => {
        console.log("Error", err)
        this.errorResponse(err);
      })
    })
  }

  delete(almacen : Almacen): Observable<any> {

    var endpoint = EndPoitBase.URL_ALMACEN + EndPoitBase.URL_DELETE_ALMACEN;
     
    return this.api.update(endpoint, almacen).pipe(

      tap(() => {
        this.getAlmacen();
      }),
      catchError(err => {
        console.log("Error", err);
        this.errorResponse(err);    
        return throwError(() => err);
      })
    );

  }

  errorResponse(error: any) {

    this.errorHttp.rutaError(error);
  }

  limpiaVariables(){
    this.almacen = {} as Almacen;

  }
}
