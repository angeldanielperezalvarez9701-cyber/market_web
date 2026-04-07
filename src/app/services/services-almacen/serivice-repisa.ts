import { Injectable, signal } from '@angular/core';
import { Repisa } from '../../model/Repisa';
import { ApiService } from '../api-service';
import { Mueble } from '../../model/Mueble';
import { EndPoitBase } from '../../utils/constantes/EnpoitBase';
import { ErrorClient } from '../error-client';
import { UiGlobal } from '../ui/ui-global';
import { ControlAlmacenUi } from '../ui/control-almacen-ui';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { ServiceMueble } from './service-mueble';

@Injectable({
  providedIn: 'root',
})
export class SeriviceRepisa {


  repisas = signal<Repisa[]>([]);
  repisasAgregar :Array<Repisa> = [];
  repisa = {} as Repisa;

  constructor(private api: ApiService,
              private errorClient : ErrorClient,
               private uiGloba: UiGlobal,
               public ui : ControlAlmacenUi,
              private servicioMueble : ServiceMueble) { }

  objetoRepisa(repisa: Repisa): Repisa {
    repisa = {

      idRepisa: repisa.idRepisa ?? null,
      nombreRepisa: repisa.nombreRepisa ?? '',
      descripcionRepisa: repisa.descripcionRepisa ?? '',
      controlIngresoProducto: repisa.controlIngresoProducto ?? [],
      mueble: repisa.mueble ?? null
    }

    return repisa;
  }

  getRepisaXMueble(mueble: Mueble){

    var endpoint = EndPoitBase.URL_REPISA + EndPoitBase.URL_REPISA_LIST_X_MUEBLE;
    var idMueble = mueble.idMueble ?? 0;

    console.log("ID MUEBLE", idMueble);
    this.api.getById(endpoint,idMueble).subscribe({

      next: (data => {
        console.log("DATA", data);
        this.uiGloba.activaSpiner.set(false);
        this.repisas.set(data);
      }), error : (err => {
        this.uiGloba.activaSpiner.set(false);
        this.error(err);
      })
    })
  }

  getRepisaXId(repisa: Repisa){

    var endpoint = EndPoitBase.URL_REPISA + EndPoitBase.URL_REPISA_LIST_X_ID;
    var idRepisa = repisa.idRepisa ?? 0;

    console.log("ID MUEBLE", idRepisa);
    this.api.getById(endpoint,idRepisa).subscribe({

      next: (data => {
        console.log("DATA", data);
        setTimeout(() => {
        this.repisa = data;
        this.uiGloba.activaSpiner.set(false);
        this.ui.formularioObjetoActivado = "formularioRepisa";
        

        });
        
      }), error : (err => {
        this.uiGloba.activaSpiner.set(false);
        this.error(err);
      })
    })
  }

  guardaRepiza(repisa: Repisa): Observable<Repisa>{
  
      var endpoint = EndPoitBase.URL_REPISA + EndPoitBase.URL_GUARDA_REPISA 
      console.log("Entrado a guardar repisa")
      return this.api.save(endpoint,repisa).pipe(
        tap(() => {
          this.getRepisaXMueble(this.servicioMueble.mueble);
          this.uiGloba.activaSpiner.set(false);
        }),catchError(err =>{
          this.error(err);
          return throwError(() => err);
        })
      )
  
    }
  
  error(error:any){
    this.errorClient.rutaError(error);
  }

  limpia(){
    this.repisa = {} as Repisa;
    this.ui.nuevaRepisa = true;

  }

  validFormExterno():any{

    if(this.repisa.nombreRepisa.length <=3){
      return "Nombre repisa invalido"
    }

    if(this.repisa.descripcionRepisa.length<=3){
      return "Descripción invalida"
    }

    if(this.repisa.mueble == null){
      return "Almacén requerido"
    }

    return null;
    
  }
}
