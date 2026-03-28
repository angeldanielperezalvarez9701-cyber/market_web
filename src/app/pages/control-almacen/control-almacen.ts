import { Component, OnInit, ViewEncapsulation, SimpleChanges, Output, EventEmitter, ChangeDetectorRef, inject } from '@angular/core';
import { ServiceAlmacenControl } from '../../services/services-almacen/service-almacen-control';
import { Almacen } from '../../model/Almacen';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';
import { MessageService, ConfirmationService, MenuItem } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ControlAlmacenUi } from '../../services/ui/control-almacen-ui';
import { FormularioAlmacen } from '../modulos/control-almacen/formulario-almacen/formulario-almacen'
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { VisualizaAlmacen } from "../modulos/control-almacen/visualiza-almacen/visualiza-almacen";
@Component({
  selector: 'app-control-almacen',
  imports: [
    CommonModule,
    TableModule,
    IconFieldModule,
    ButtonModule,
    RatingModule,
    TagModule,
    InputIconModule,
    ToastModule,
    SplitButtonModule,
    InputTextModule,
    FormularioAlmacen,
    ConfirmDialogModule,
    VisualizaAlmacen
],
  templateUrl: './control-almacen.html',
  styleUrl: './control-almacen.css',
  standalone: true,
  encapsulation: ViewEncapsulation.None
})
export class ControlAlmacen implements OnInit {


  messageService = inject(MessageService);
  private confirmationService = inject(ConfirmationService);
  almacen = {} as Almacen;
  items: MenuItem[];

  constructor(public serviceAlmacen: ServiceAlmacenControl, public ui: ControlAlmacenUi) {

    this.items = [
      {
        label: 'Nuevo Almacén',
        command: () => {
          this.agregarAlmacen();
        }
      },
      { separator: true },
      {
        label: 'Agregar producto',
        command: () => {

        }
      },

    ];
  }

  ngOnInit(): void {

    this.serviceAlmacen.getAlmacen();
  

  }


  agregarAlmacen() {

    this.ui.opcionLimpieza="formularioPrincipal";
    this.ui.muestraFormulario();

  }

  verAlmacen(almacen: Almacen) {

    var idAlmacen = almacen.idAlmacen;
    this.ui.opcionLimpieza="formularioSecundario";
    this.serviceAlmacen.getById(idAlmacen);
    this.ui.muestraAlmacenById();

  }

  confirm(event: Event, almacen: Almacen) {
    event.preventDefault();
    event.stopPropagation();

    this.confirmationService.confirm({
      message: '¿Estas seguro de eliminar el Tipo Producto?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => this.delete(almacen)
    });

  }

  async delete(almacen: Almacen): Promise<any> {

    try {

      almacen.eliminarAlmacen = false;
      await this.serviceAlmacen.delete(almacen);
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Almacén eliminado', life: 3000 });

    } catch (error) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Ocurrió un error al eliminar el Almacén', life: 3000 });
    }




  }

}
