import { Injectable, signal } from '@angular/core';
import { Mueble } from '../../model/Mueble';
import { Repisa } from '../../model/Repisa';
import { ApiService } from '../api-service';
import { EndPoitBase } from '../../utils/constantes/EnpoitBase';
import { Error } from '../../pages/error/error';
import { ErrorClient } from '../error-client';

@Injectable({
  providedIn: 'root',
})
export class ServiceMueble {

  muebles = signal<Mueble[]>([]);
  mueble = {} as Mueble;
  repisas = signal<Repisa []>([]);
  
  constructor(private api : ApiService, private errorClient: ErrorClient){}
  objetoMueble(mueble:Mueble) : Mueble{

    mueble = {
      idMueble: mueble.idMueble ?? null,
      nombreMueble: mueble.nombreMueble ?? '',
      numeroMueble: mueble.numeroMueble ?? 0,
      descripcionMueble: mueble.descripcionMueble ?? '',
      tipoMueble : mueble.tipoMueble ?? null,
      almacen : mueble.almacen ?? null,
      repisas: mueble.repisas ?? []
    }

    return mueble;
  }

  getRepisa(){

    var endpoint = EndPoitBase.URL_TIPO_MUEBLE + EndPoitBase.URL_LISTA_TIPO_MUEBLE;
    
    this.api.getAll(endpoint).subscribe({
      next : (data =>{
        this.repisas.set(data);
        console.log("Data", data)
      }),
      error :(err => {
        console.log("Err", err);
        this.errorCli(err);
      })
    })
  }

  errorCli(err:any){
    this.errorClient.rutaError(err);
  }
}
