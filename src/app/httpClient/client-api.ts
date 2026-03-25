import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../utils/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientApi {

  baseUrl:string=environment.apiUrl;
   headers: HttpHeaders = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('Accept', 'application/json');

  constructor(private http: HttpClient) {}

  get<T>(url: string) :  Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/${url}`, {
      headers: this.headers
    });
  }

  getById(url: string, id: number) {
    return this.http.get(`${this.baseUrl}/${url}/${id}`);
  }

  post(url: string, body: any) {
    return this.http.post(`${this.baseUrl}/${url}`, body,{
      headers : this.headers
    });
  }

  put(url: string, body: any) {
    return this.http.put(`${this.baseUrl}/${url}`, body);
  }

  delete(url: string, id: number) {
    return this.http.delete(`${this.baseUrl}/${url}/${id}`);
  }
}
