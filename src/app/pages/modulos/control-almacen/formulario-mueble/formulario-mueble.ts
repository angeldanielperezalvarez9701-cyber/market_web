import { Component, OnInit } from '@angular/core';
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
import { NgClass } from '@angular/common';
import { ServiceMueble } from '../../../../services/services-almacen/service-mueble';
import { Mueble } from '../../../../model/Mueble';
import { ControlAlmacenUi } from '../../../../services/ui/control-almacen-ui';


@Component({
  selector: 'app-formulario-mueble',
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
  templateUrl: './formulario-mueble.html',
  styleUrl: './formulario-mueble.css',
})
export class FormularioMueble  implements OnInit{

  constructor(public servicioMueble : ServiceMueble, public ui: ControlAlmacenUi){}

  ngOnInit(): void {
    var mueble = {} as Mueble;
    this.servicioMueble.mueble = this.servicioMueble.objetoMueble(mueble);
    this.servicioMueble.getRepisa();
  }
  onSubmit(form:any){

  }
}
