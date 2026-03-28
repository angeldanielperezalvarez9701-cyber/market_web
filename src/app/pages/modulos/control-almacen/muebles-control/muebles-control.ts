import { Component,  OnInit, ViewEncapsulation} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { MenuItem, MessageService } from 'primeng/api';
import { FloatLabelModule } from 'primeng/floatlabel';
import { TextareaModule } from 'primeng/textarea';
import { SelectModule } from 'primeng/select';
import { BadgeModule } from 'primeng/badge';
import { ProgressBarModule } from 'primeng/progressbar';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms'; //
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';
import { TableModule,Table } from 'primeng/table';
import { ControlAlmacenUi } from '../../../../services/ui/control-almacen-ui';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ServiceMueble } from '../../../../services/services-almacen/service-mueble';
import { Dialog, DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-muebles-control',
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
        DialogModule
        
  ],
  templateUrl: './muebles-control.html',
  styleUrl: './muebles-control.css',
  standalone: true,
  encapsulation: ViewEncapsulation.None
})
export class MueblesControl  implements OnInit{

  items: MenuItem[];

  constructor(public ui : ControlAlmacenUi, public servicioMueble : ServiceMueble){

    this.items = [
      {
        label: 'Nuevo tipo Mueble',
        command: () => {
          this.agregarMueble();
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
    
  }

  agregarMueble(){

  }
}
