import { Component, inject, OnInit, ViewEncapsulation,SimpleChanges } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TagModule } from 'primeng/tag';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { Producto } from '../../../../model/Producto';
import { ControlIngresoProducto } from '../../../../model/ControlIngresoProducto';
import { UiFormControlIngresoProducto } from './ui-form-control-ingreso-producto';
import { ControlProductoUiService } from '../../../../services/ui/control-producto-ui-service';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-form-control-ingreso-producto',
  imports: [ 
    MessageModule, ToastModule,IconFieldModule,InputIconModule,TagModule,InputNumberModule,
    ButtonModule, InputTextModule,
    FormsModule, ReactiveFormsModule,
    FloatLabelModule,
    ButtonModule, ToastModule, RadioButtonModule,TableModule,
    NgClass],
  templateUrl: './form-control-ingreso-producto.html',
  styleUrl: './form-control-ingreso-producto.css',
  encapsulation: ViewEncapsulation.None
})
export class FormControlIngresoProducto implements OnInit{

  productos :Array<Producto> = [];
  producto : Producto = {} as Producto;
  controlIngresos: ControlIngresoProducto = {} as ControlIngresoProducto;
  piezasProducto:number=0;
  precioCompraProducto:number=0.0;
  interfazUiForm = new UiFormControlIngresoProducto();

  constructor(public matrizUI: ControlProductoUiService){}
  ngOnInit(): void {
    
  }

    getSeverity(status: string) {
        switch (status) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warn';
            case 'OUTOFSTOCK':
                return 'danger';
        }

          return undefined;
    }

  

}
