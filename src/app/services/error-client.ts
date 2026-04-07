import { inject, Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ErrorClient {

  messageService = inject(MessageService);

  constructor(private router: Router) { }

  rutaError(codigoError: any) {

    if (codigoError.status === 404) {
      this.messageService.add({ severity: 'error', summary: 'Dato no existente', detail: 'El registro que deseas consultar no existe', life: 3000 });
    
      return;
    }
    this.router.navigate(['/error'])
  }

}
