import { Component, OnInit, ViewEncapsulation, SimpleChanges, Output, EventEmitter, ChangeDetectorRef, inject } from '@angular/core';
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
import { InputTextModule } from 'primeng/inputtext';
import { CurrencyPipe } from '@angular/common';
import { Input } from '@angular/core';
import { ControlProductoUiService } from '../../../../services/ui/control-producto-ui-service';
import { ApiService } from '../../../../services/api-service';
import { EndPoitBase } from '../../../../utils/constantes/EnpoitBase';
import { ServiceProducts } from '../../../../services/services-product/service-products';
import { Router } from '@angular/router';
import { MessageService, ConfirmationService, MenuItem } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ControlTipoProducto } from "../control-tipo-producto/control-tipo-producto";
import { TipoProducto } from '../../../../model/TipoProducto';
@Component({
  selector: 'app-lista-productos',
  imports: [ButtonModule, RatingModule, ToastModule,
    TableModule, TagModule, SplitButtonModule,
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
  @Output() productoSeleccionado = new EventEmitter<Producto>();
  @Output() tipoProductoSeleccionado = new EventEmitter<TipoProducto>();
  messageService = inject(MessageService);
  listaProductoUi = new ListaProductosUi();
  items: MenuItem[];
  private confirmationService = inject(ConfirmationService);


  endPointBase: string = EndPoitBase.URL_PRODUCTO;

  constructor(public ui: ControlProductoUiService,
    private api: ApiService,
    public serviceProduco: ServiceProducts,
    private router: Router,
    private cd: ChangeDetectorRef) {

    this.items = [
      {
        label: 'Nuevo tipo producto',
        command: () => {
          this.nuevoTipoProducto();
        }
      },
      { separator: true },
      {
        label: 'Agregar producto',
        command: () => {
          this.agregarProducto();
        }
      },

    ];
  }

  ngOnInit(): void {
    this.listaProductoUi.columnasTabla();

    this.listProducto();
    this.listaTipoProducto();
    this.cd.detectChanges();


  }

  ngOnChanges(changes: SimpleChanges) {

    if (this.vistaBotonera === true) {
      this.listaProductoUi.componentesElementoPadre()
    }

  }

  listProducto() {

    var endpoint = EndPoitBase.URL_PRODUCTO + EndPoitBase.URL_LISTA_PRODUCTO;

    this.api.getAll(endpoint).subscribe({
      next: (data) => {

        this.ui.products.set([...data]);
        this.cd.detectChanges();
      },
      error : (err) => {
        this.serviceProduco.errorCliente(err);
      }
    })

  }

  listaTipoProducto() {

    var endpoint = EndPoitBase.URL_BASE_TIPO_PRODUCTO + EndPoitBase.URL_LISTA_TIPO_PRODUCTO;

    this.api.getAll(endpoint).subscribe({
      next: (data) => {
        this.ui.listaTipoProducto.set([...data]);
        this.cd.detectChanges();
      },
      error : (err) => {
        this.serviceProduco.errorCliente(err)
      }
    })

  }



  updateProducto(product: Producto) {

    this.productoSeleccionado.emit(product);
    this.ui.updateProducto("activaForm");

  }

  updateTipoPoucto(tipoProduct: TipoProducto) {

    console.log("EMIITIENDO", tipoProduct)

    this.tipoProductoSeleccionado.emit(tipoProduct);
    this.ui.mostrarFormularioTipoProducto();

  }

  confirm(event: Event, product: Producto) {
    event.preventDefault();
    event.stopPropagation();

    if (product.existenciaLogica) {

      this.confirmationService.confirm({
        message: '¿Estas seguro de eliminar el Producto?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => this.deleteProducto(product)

      });

    }

  }

  confirmTipoProduto(event: Event, tipoProduct: TipoProducto) {
    event.preventDefault();
    event.stopPropagation();
    if (tipoProduct.idTipoProducto != null) {
      this.confirmationService.confirm({
        message: '¿Estas seguro de eliminar el Tipo Producto?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => this.deleteTipoProducto(tipoProduct)
      });
    }

  }

  deleteProducto(product: Producto) {

    var endpoit = this.endPointBase + EndPoitBase.URL_ELIMINA_LOGICO_PRODUCTO
    product.existenciaLogica = false

    this.api.update(endpoit, product).subscribe(data => {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Producto eliminado', life: 3000 });
    })
  }

  deleteTipoProducto(tipoProduct: TipoProducto) {

    var endpoint = EndPoitBase.URL_BASE_TIPO_PRODUCTO + EndPoitBase.URL_ELIMINAR_TIPO_PRODUCTO;

    this.api.delete(endpoint, tipoProduct.idTipoProducto).subscribe({
      next: (data) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Producto eliminado', life: 3000 });
        this.serviceProduco.getTipoProducto();
      },
      error: (err) => {
        this.serviceProduco.errorCliente(err);
      }
    })

  }

  agregarProducto() {
    this.ui.updateProducto("activaForm");
  }

  nuevoTipoProducto() {

    console.log("TIPO PRODUCTO")
    this.ui.mostrarFormularioTipoProducto();

  }






}
