import { inject, Injectable, signal, Signal } from '@angular/core';
import { Almacen } from '../../model/Almacen';
import { ApiService } from '../api-service';
import { EndPoitBase } from '../../utils/constantes/EnpoitBase';
import { MessageService } from 'primeng/api';
import { ErrorClient } from '../error-client';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceAlmacenControl {

  almacenes = signal<Almacen[]>([]);
  almacen = {} as Almacen;
  loading: boolean = false;
  messageService = inject(MessageService);
  constructor(private api: ApiService, private errorHttp: ErrorClient) { }


  objetoAlmacen(almacen: Almacen): Almacen {

    almacen = {

      idAlmacen: almacen.idAlmacen ?? null,
      nombreAlmacen: almacen.nombreAlmacen ?? "",
      notasAlmacen: almacen.notasAlmacen ?? '',
      descripcionAlmacen: almacen.descripcionAlmacen ?? '',
      eliminarAlmacen :almacen.eliminarAlmacen ?? true,
      ubicacionDTO: almacen.ubicacionDTO ?? null,
      mueblesMuebleDTOS: almacen.mueblesMuebleDTOS ?? [],
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
        this.almacen = data
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

}
