import { Component, OnInit ,ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { Producto } from '../../model/Producto';
import { TipoProducto } from '../../model/TipoProducto';


@Component({
  selector: 'app-nueva-venta',
  imports: [ButtonModule, TableModule, ToastModule],
  templateUrl: './nueva-venta.html',
  styleUrl: './nueva-venta.css',
  encapsulation: ViewEncapsulation.None
})
export class NuevaVenta implements OnInit {
 

  //cantidad=1;
  cantidad:number =1;
  products: Array<Producto> = [];

  ngOnInit(): void {
    

  }
}
