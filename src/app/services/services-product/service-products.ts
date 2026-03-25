import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Producto } from '../../model/Producto';
import { ApiService } from '../api-service';
import { EndPoitBase } from '../../utils/constantes/EnpoitBase';
import { ControlProductoUi } from '../../pages/control-productos/control-productos-ui';
import { ControlProductoUiService } from '../ui/control-producto-ui-service';
import { Router } from '@angular/router';
import { ErrorClient } from '../error-client';

@Injectable({
  providedIn: 'root',
})
export class ServiceProducts {

  imagenEnBytes: Uint8Array | null = null;
  imagenVisualizacion: SafeUrl | null = null;

  constructor(private sanitizer: DomSanitizer,
    private api: ApiService,
    private uiProducto: ControlProductoUiService,
    private errorService : ErrorClient
  ) { }


  /**
   * Tratado de imagen
   * @param event 
   */
  convertirArchivoABytes(file: File): Promise<Uint8Array> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        const arrayBuffer = reader.result as ArrayBuffer;
        const bytes = new Uint8Array(arrayBuffer);
        resolve(bytes);
      };

      reader.onerror = (error) => reject(error);

      reader.readAsArrayBuffer(file);
    });
  }

  convertirBytesAImagen(base64String: any): SafeUrl | string {
    // 1. Si no hay datos (undefined/null), devolvemos la imagen por defecto de una vez
    if (!base64String) {
      return '/img/alpuraDeslac-Photoroom.png';
    }

    // 2. Si ya es una cadena, le ponemos el prefijo de imagen
    // Nota: Usamos SafeUrl para que Angular no lo bloquee por seguridad
    const imagenData = `data:image/png;base64,${base64String}`;
    return this.sanitizer.bypassSecurityTrustUrl(imagenData);
  }


  getProductos() {
    var endpoint = EndPoitBase.URL_PRODUCTO + EndPoitBase.URL_LISTA_PRODUCTO;
    this.api.getAll(endpoint).subscribe({
      next: (data) => {
        this.uiProducto.products.set([...data]);
      },
      error: (err) => {
         this.errorCliente(err);
      }
    }
    )
  }

  getTipoProducto() {

    var endpoint = EndPoitBase.URL_BASE_TIPO_PRODUCTO + EndPoitBase.URL_LISTA_TIPO_PRODUCTO;

    this.api.getAll(endpoint).subscribe({
      next: (data) => {
        
       this.uiProducto.listaTipoProducto.set([...data]);
      },
      error: (err) => {
        this.errorCliente(err)
      }

    })

  }

  errorCliente(error:any){
     this.errorService.rutaError(error.status);
  }

}
