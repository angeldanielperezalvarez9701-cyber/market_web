import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ErrorClient {

  constructor(private router: Router) { }

  rutaError(codigoError: any) {
    this.router.navigate(['/error'])
  }
  
}
