import { Component, OnInit, ViewEncapsulation, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { ListaProductosUi } from './lista-productos-ui';
import { Producto } from '../../../../model/Producto';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TipoProducto } from '../../../../model/TipoProducto';
import { InputTextModule } from 'primeng/inputtext';
import { CurrencyPipe } from '@angular/common';
import { Input } from '@angular/core';
import { ControlProductoUiService } from '../../../../services/ui/control-producto-ui-service';
import { ApiService } from '../../../../services/api-service';
import { EndPoitBase } from '../../../../utils/constantes/EnpoitBase';

@Component({
  selector: 'app-lista-productos',
  imports: [ButtonModule, RatingModule,
    TableModule, TagModule,
    FormsModule, ConfirmDialogModule,
    IconFieldModule, InputIconModule,
    InputTextModule, CurrencyPipe,
    CommonModule],
  templateUrl: './lista-productos.html',
  styleUrl: './lista-productos.css',
  standalone: true,
  encapsulation: ViewEncapsulation.None
})
export class ListaProductos implements OnInit {

  @Input() nombreTitulo!: string;
  @Input() vistaBotonera!: boolean;
  listaProductoUi = new ListaProductosUi();
  products: Array<Producto> = [];
  endPointBase: string = EndPoitBase.URL_PRODUCTO;

  constructor(public ui: ControlProductoUiService, private api: ApiService) { }

  ngOnInit(): void {

    this.listarProductos();
    this.listaProductoUi.columnasTabla();

  }

  ngOnChanges(changes: SimpleChanges) {

    if (this.vistaBotonera === true) {
      this.listaProductoUi.componentesElementoPadre()
    }
    this.listarProductos();

  }

  listarProductos() {

    var endpoint = this.endPointBase + EndPoitBase.URL_LISTA_PRODUCTO
    this.api.getAll(endpoint).subscribe(data => {
      this.products = data;
    })

  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warn';
      case 'OUTOFSTOCK':
        return 'danger';
    }

    return undefined;
  }



}
