import { Component } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ControlProductoUiService } from '../../../../services/ui/control-producto-ui-service';
import { CommonModule } from '@angular/common';
import { Almacen } from '../../../../model/Almacen';
@Component({
  selector: 'app-busqueda-inventario',
  standalone: true,
  imports: [ButtonModule, DataViewModule, TagModule,CommonModule],
  templateUrl: './busqueda-inventario.html',
  styleUrl: './busqueda-inventario.css',
})
export class BusquedaInventario {


  almacen  : Array<Almacen> = [];

  constructor(public ui : ControlProductoUiService){}


   getSeverity(item: any): 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast' | null {
    return null;
   }

}
