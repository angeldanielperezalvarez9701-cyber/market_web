
import { ChangeDetectorRef, Component, inject, OnChanges, OnInit, signal, SimpleChanges, ViewEncapsulation } from '@angular/core';
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
import { ControlAlmacenUi } from '../../../../services/ui/control-almacen-ui';
import { ServiceMueble } from '../../../../services/services-almacen/service-mueble';
import { TipoProducto } from '../../../../model/TipoProducto';
import { TipoMueble } from '../../../../model/TipoMueble';

@Component({
  selector: 'app-control-tipo-producto',
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
  templateUrl: './control-tipo-producto.html',
  styleUrl: './control-tipo-producto.css',
})
export class ControlTipoProducto implements OnInit, OnChanges {

  messageService = inject(MessageService);

  constructor(public serviceMueble: ServiceMueble, public ui: ControlAlmacenUi) { }

  ngOnInit(): void {
    
    this.tipoMueble();
   
  }

  ngOnChanges(changes: SimpleChanges): void {
     this.tipoMueble();
  }


  tipoMueble(){

    var tipoP = {} as TipoMueble;
     if (this.ui.nuevoTipoProducto) {
      this.serviceMueble.tipoMuebleObj = this.serviceMueble.objetoTipoMueble(tipoP);
    }
  }

  onSubmit(form: any) {

  }
}
