import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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
import { ServiceAlmacenControl } from '../../../../services/services-almacen/service-almacen-control';
import { Almacen } from '../../../../model/Almacen';
import { UbicacionControl } from "../../../ubicacion-control/ubicacion-control";
import { ServiceUbicacionControl } from '../../../../services/services-ubicacion/service-ubicacion-control';
import { MueblesControl } from "../muebles-control/muebles-control";
import { Dialog, DialogModule } from 'primeng/dialog';
import { FormularioMueble } from "../formulario-mueble/formulario-mueble";
@Component({
  selector: 'app-visualiza-almacen',
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
    UbicacionControl,
    TabsModule,
    MueblesControl,
    DialogModule,
    FormularioMueble
],
  templateUrl: './visualiza-almacen.html',
  styleUrl: './visualiza-almacen.css',
  standalone: true,
  encapsulation: ViewEncapsulation.None
})
export class VisualizaAlmacen implements OnInit{

  
  
  constructor(public ui : ControlAlmacenUi, public  serviceAlmacen : ServiceAlmacenControl, public servicioUbicacion : ServiceUbicacionControl){
  
  }

  ngOnInit(): void {
    var almacen = {} as Almacen;
    this.serviceAlmacen.almacen= this.serviceAlmacen.objetoAlmacen(almacen);
    
  }

  onSubmit(form:any){

  }

  editar(form:any){
    
    this.servicioUbicacion.ubicacion = this.serviceAlmacen.almacen.ubicacionDTO;
    this.ui.editaubicacionVista();
  }

  showDialog(){
    console.log("SOW")
    this.ui.visible = true
    this.ui.mostarFormularioModalMueble();
  }


}
