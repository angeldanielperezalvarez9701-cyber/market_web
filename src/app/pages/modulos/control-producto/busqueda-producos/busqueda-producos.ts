import { Component, inject, OnInit, ViewEncapsulation,SimpleChanges } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { BusquedaUI } from './busqueda-ui';
import { ListaProductos } from "../lista-productos/lista-productos";
import { ControlProductoUiService } from '../../../../services/ui/control-producto-ui-service';

@Component({
  selector: 'app-busqueda-producos',
  imports: [
    MessageModule, ToastModule,
    ButtonModule, InputTextModule,
    FormsModule, ReactiveFormsModule,
    FloatLabelModule,
    ButtonModule, ToastModule, RadioButtonModule,
    NgClass,
    ListaProductos
  ],
  templateUrl: './busqueda-producos.html',
  styleUrl: './busqueda-producos.css',
  standalone: true,
  encapsulation: ViewEncapsulation.None
})
export class BusquedaProducos implements OnInit {

  busquedaui = new BusquedaUI();

  constructor(public ui: ControlProductoUiService) {}

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  onCambioOpcion(o:any) {

    
    let opcion = this.busquedaui.ingredient;

    console.log("opcion" + opcion)

    if (opcion !== undefined) {

      this.busquedaui.aplicarOpcion(opcion);
      
    }


  }

  consultaProducto() {
    console.log("Escucho")

    this.busquedaui.muestraProducto();

  }

 

}
