import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { NgClass } from '@angular/common';

import { ControlProductoUiService } from '../../../../services/ui/control-producto-ui-service';
@Component({
  selector: 'app-inventario-general-productos',
  imports: [ButtonModule,NgClass],
  templateUrl: './inventario-general-productos.html',
  styleUrl: './inventario-general-productos.css',
})
export class InventarioGeneralProductos {

    constructor(public ui: ControlProductoUiService) {}
}
