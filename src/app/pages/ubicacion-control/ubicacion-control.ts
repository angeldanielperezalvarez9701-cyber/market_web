import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
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
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceUbicacionControl } from '../../services/services-ubicacion/service-ubicacion-control';
import { Ubicacion } from '../../model/Ubicacion';
import { NgClass } from '@angular/common';
import { ControlAlmacenUi } from '../../services/ui/control-almacen-ui';
@Component({
  selector: 'app-ubicacion-control',
  imports: [
    FormsModule,
    MessageModule,
    ToastModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    FloatLabelModule,
    TextareaModule,
    SelectModule,
    BadgeModule,
    ProgressBarModule,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './ubicacion-control.html',
  styleUrl: './ubicacion-control.css',
  standalone: true,
  encapsulation: ViewEncapsulation.None
})
export class UbicacionControl implements OnInit {

  messageService = inject(MessageService);
 
  delegaciones: any[] = [];
  ciudades : any[]=[];

  constructor(public servicioUbi: ServiceUbicacionControl, public ui: ControlAlmacenUi) { }

  ngOnInit(): void {

    var ubicacionPrepara = {} as Ubicacion;
    this.servicioUbi.ubicacion = this.servicioUbi.ubicacionObjeto(ubicacionPrepara);
    this.delegaciones = this.servicioUbi.listaDelegacion();
    this.ciudades = this.servicioUbi.listaCiudadesEstados();
  }

  onSubmit(form: any) {

    if (!this.servicioUbi.botonOrigen) {

    } else {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form Submitted', life: 3000 });
      this.ui.banderaIntroduceUbicacionSelec= true;
    }
  }

  limpiar(form: any) {
    this.ui.limpiarContenido();
  }


}
