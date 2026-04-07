import { Component, inject, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { ServiceAlmacenControl } from '../../../../services/services-almacen/service-almacen-control';
import { Almacen } from '../../../../model/Almacen';
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
import { ServiceUbicacionControl } from '../../../../services/services-ubicacion/service-ubicacion-control';
import { ControlAlmacenUi } from '../../../../services/ui/control-almacen-ui';
import { CommonModule } from '@angular/common';
import { UbicacionControl } from "../../../ubicacion-control/ubicacion-control";
import { EndPoitBase } from '../../../../utils/constantes/EnpoitBase';
import { ApiService } from '../../../../services/api-service';
import { Ubicacion } from '../../../../model/Ubicacion';

@Component({
  selector: 'app-formulario-almacen',
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
    UbicacionControl
  ],
  templateUrl: './formulario-almacen.html',
  styleUrl: './formulario-almacen.css',
  standalone: true,
  encapsulation: ViewEncapsulation.None
})
export class FormularioAlmacen implements OnInit, OnChanges {


  messageService = inject(MessageService);
  almacen = {} as Almacen;

  constructor(public serviceAlmacen: ServiceAlmacenControl, private api: ApiService,
    public serviceUbicacion: ServiceUbicacionControl,
    public ui: ControlAlmacenUi) { }

  ngOnInit(): void {

    var almacenPrepara = {} as Almacen;
    this.almacen = this.serviceAlmacen.objetoAlmacen(almacenPrepara);

  }

  ngOnChanges(changes: SimpleChanges): void {

    if (this.ui.banderaIntroduceUbicacionSelec) {
      console.log("True")
    }
  }

  onSubmit(form: any) {

    var endpoit = EndPoitBase.URL_ALMACEN + EndPoitBase.URL_GUARDAR_ALMACEN;

    if (this.serviceUbicacion.botonOrigen) {
      this.ubicacionOrigen();
    }
    if (form.valid) {
      this.api.save(endpoit, this.almacen).subscribe({
        next: (data => {
          this.serviceAlmacen.getAlmacen();
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form Submitted', life: 3000 });
          this.limpiar(form)
        }),
        error: (err => {
          this.serviceAlmacen.errorResponse(err)
        })
      })

    }

  }

  ubicacionOrigen() {

    console.log("Entrado ubicaorigen")
    this.almacen.ubicacion = this.serviceUbicacion.ubicacion;
  }

  limpiar(form: any) {

    this.almacen= {} as Almacen;
    this.serviceUbicacion.ubicacion = {} as Ubicacion;
    this.serviceUbicacion.botonOrigen = false;
    this.ui.contenidoUbicacion = true;
    this.serviceUbicacion.agegaTituloExtra = true;
    this.serviceUbicacion.textoTitutlo = 'Ubicación' ;
    this.serviceUbicacion.botonLlamado =true; 
    this.ui.muestraContenido();
    
  }
}
