import { Component, OnInit ,ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { Producto } from '../../model/Producto';


@Component({
  selector: 'app-nueva-venta',
  imports: [ButtonModule, TableModule, ToastModule],
  templateUrl: './nueva-venta.html',
  styleUrl: './nueva-venta.css',
  encapsulation: ViewEncapsulation.None
})
export class NuevaVenta implements OnInit {
 

  products: Array<Producto> = [];

  ngOnInit(): void {
    
    const p:Producto={
    
      producto:"leche",
      cantidad:2,
      preciosUnidad:25,
      total:50,
      id:1


    }
    this.products.push(p);
  }
}
