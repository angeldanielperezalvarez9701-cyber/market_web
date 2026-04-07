import { Component, inject } from '@angular/core';
import { ControlAlmacenUi } from '../../../../services/ui/control-almacen-ui';
import { FormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { MessageService } from 'primeng/api';
import { FloatLabelModule } from 'primeng/floatlabel';
import { TextareaModule } from 'primeng/textarea';
import { SelectModule } from 'primeng/select';
import { BadgeModule } from 'primeng/badge';
import { ProgressBarModule } from 'primeng/progressbar';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms'; //
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';
import { Dialog, DialogModule } from 'primeng/dialog';
import { NgClass } from '@angular/common';
import { ServiceMueble } from '../../../../services/services-almacen/service-mueble';
import { ServiceAlmacenControl } from '../../../../services/services-almacen/service-almacen-control';
import { UiGlobal } from '../../../../services/ui/ui-global';
import { SeriviceRepisa } from '../../../../services/services-almacen/serivice-repisa';
import { Mueble } from '../../../../model/Mueble';

@Component({
  selector: 'app-visualiza-mueble',
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
    DialogModule,
    NgClass
  ],
  templateUrl: './visualiza-mueble.html',
  styleUrl: './visualiza-mueble.css',
})
export class VisualizaMueble {

  messageService = inject(MessageService);

  constructor(public ui: ControlAlmacenUi,
    public serviceMueble: ServiceMueble,
    public serviceAlmacen: ServiceAlmacenControl,
    public serviceRepisa: SeriviceRepisa,
    private uiGloba: UiGlobal) { }


  retrocede() {

    if (this.ui.tabActivo() === "1") {
      this.ui.tabActivo.set("0")
      this.serviceMueble.mueble = {} as Mueble;

      return;
    }
    this.ui.muestraContenedorMueble("verContenedor")
  }

  aceptaCambio(cambio: string) {

    if ("tipoProducto" === cambio) {
      this.modificaTipoMueble()

    }

  }

  verRepisa() {

    this.uiGloba.activaSpiner.set(true);
    this.ui.nuevaRepisa = false;
    this.serviceRepisa.getRepisaXMueble(this.serviceMueble.mueble);
    this.ui.muestraContenedorMueble("verRepisa");
  }

  modificaTipoMueble() {

    this.uiGloba.activaSpiner.set(true);
    this.serviceMueble.mueble.almacen = this.serviceAlmacen.almacen
    this.serviceMueble.guardaMueble(this.serviceMueble.mueble).subscribe({
      next: (data => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Tipo Mueble modificado', life: 5000 });
      })
    })
     this.ui.editaTipo = false;
  }

  onSubmit(form: any) {

    this.uiGloba.activaSpiner.set(true);

    this.serviceMueble.mueble.almacen = this.serviceAlmacen.almacen;

    console.log("Mueble {}", this.serviceMueble.mueble);

    if (form.valid) {

      this.serviceMueble.guardaMueble(this.serviceMueble.mueble).subscribe({
        next: (data => {
          this.limpiar(form);
          this.messageService.add({ severity: 'success', summary: 'Mueble actualizado', detail: 'Form Submitted', life: 3000 });
          this.retrocede();
          this.uiGloba.activaSpiner.set(false);
        })
      });

    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Campos incorrectos', life: 3000 });
    }
  }

  limpiar(form: any) {
    form.resetForm();
  }
}
