import { Injectable } from '@angular/core';
import { ClientApi } from '../httpClient/client-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  
  constructor(private cliente : ClientApi){}

   getAll(endpoint:string): Observable<any[]> {
    return this.cliente.get<any[]>(endpoint);
  }

  getById( endpoint:string , id: number) :Observable<any> {
    return this.cliente.getById(endpoint, id);
  }

  save(endpoint:string, modelo: any): Observable<any> {
    return this.cliente.post(endpoint, modelo);
  }

  update(endpoint:string, modelo: any): Observable<any>{
    return this.cliente.put(endpoint, modelo);
  }

  delete(endpoint:string, id: number): Observable<any> {
    return this.cliente.delete(endpoint, id);
  }

}
