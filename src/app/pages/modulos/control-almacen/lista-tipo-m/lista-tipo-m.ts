
import { ChangeDetectorRef, Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { FloatLabelModule } from 'primeng/floatlabel';
import { TextareaModule } from 'primeng/textarea';
import { SelectModule } from 'primeng/select';
import { BadgeModule } from 'primeng/badge';
import { ProgressBarModule } from 'primeng/progressbar';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms'; //
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';
import { TableModule, Table } from 'primeng/table';
import { SplitButtonModule } from 'primeng/splitbutton';
import { Dialog, DialogModule } from 'primeng/dialog';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ControlAlmacen } from '../../../control-almacen/control-almacen';
import { ServiceMueble } from '../../../../services/services-almacen/service-mueble';
import { ControlAlmacenUi } from '../../../../services/ui/control-almacen-ui';
import { TipoMueble } from '../../../../model/TipoMueble';
import { UiGlobal } from '../../../../services/ui/ui-global';

@Component({
  selector: 'app-lista-tipo-m',
  imports: [
    FormsModule,
    ToastModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    MessageModule,
    FloatLabelModule,
    TextareaModule,
    SelectModule,
    ProgressBarModule,
    MessageModule,
    BadgeModule,
    ReactiveFormsModule,
    CommonModule,
    TabsModule,
    TableModule,
    SplitButtonModule,
    DialogModule,
    IconFieldModule,
    InputIconModule
  ],
  templateUrl: './lista-tipo-m.html',
  styleUrl: './lista-tipo-m.css',
})
export class ListaTipoM implements OnInit {

  messageService = inject(MessageService);
  private confirmationService = inject(ConfirmationService);
  constructor(public ui: ControlAlmacenUi, public servicioMueble: ServiceMueble, public uiGlobal: UiGlobal, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.servicioMueble.getTipoMueble();
  }

  consultaTipoM(muebleTipo: TipoMueble) {

    console.log(" buscando x id tm")
    this.uiGlobal.activaSpiner.set(true);
    this.ui.formularioObjetoActivado = "formularioTipoProducto"
    this.ui.nuevoTipoProducto = false;

    this.servicioMueble.getTipoMuebleId(muebleTipo);


  }

  confirm(event: Event, tpm: TipoMueble) {
    event.preventDefault();
    event.stopPropagation();

    this.confirmationService.confirm({
      message: '¿Estas seguro de eliminar el tipo de mueble?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => this.servicioMueble.eliminaTipoMueble(tpm)
    });

  }

  eliminaTipoM( tpm: TipoMueble){
    this.uiGlobal.activaSpiner.set(true);
    this.servicioMueble.eliminaTipoMueble(tpm);
    this.cd.detectChanges();
    if(this.servicioMueble.eliminado() === true){
         this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Tipo mueble eliminado', life: 3000 });
    }
  }

}
