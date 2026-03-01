import { Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { MenuModule } from 'primeng/menu';
import { InputTextModule } from 'primeng/inputtext';
import { MenuItem } from 'primeng/api';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { TooltipModule } from 'primeng/tooltip';
import { AvatarModule } from 'primeng/avatar';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SelectButtonChangeEvent } from 'primeng/selectbutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { CardModule } from 'primeng/card';
import { DrawerModule } from 'primeng/drawer';
import { ChangeDetectorRef } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { ConfirmDialogModule } from 'primeng/confirmdialog'
import { ToastModule } from 'primeng/toast';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [ButtonModule, InputGroupModule, MenuModule,
    SelectButtonModule, InputGroupAddonModule,
    InputTextModule, TooltipModule,
    AvatarModule, OverlayBadgeModule, NgClass,
    FormsModule, InputNumberModule, CardModule, DrawerModule, CommonModule, ConfirmDialogModule, ToastModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
  encapsulation: ViewEncapsulation.None
})
export class Productos implements OnInit {

  items: MenuItem[] | undefined;
  stateOptions: any[] = [];
  value: string = 'one-way';
  visible: boolean = false;
  visibleMenu: boolean = false
  visibleOpciones: boolean = true;
  visibleBoton: boolean = false;
  visibleListaProductos = true;
  cantidadPiezas: number = 0;
  esCelular = false;
  esTabletODesktop = false;
  textoTempora:String="Azucar"
  private confirmationService = inject(ConfirmationService);
  private messageService = inject(MessageService);
  constructor(private breakpointObserver: BreakpointObserver, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.detectarPantalla();
    this.items = [{ label: 'Web Search' }, { label: 'AI Assistant' }, { label: 'History' }];
    this.menuOpcion();
    this.value = '1';
  }


  verTodosProductos(event: MouseEvent) {

    event.preventDefault();
    this.bloqueaComponentes('1');


  }

  cambioFiltro(event: SelectButtonChangeEvent) {

    let valorSeleccionado = event.value;

    this.bloqueaComponentes(valorSeleccionado);


    console.log(valorSeleccionado);
  }
  menuOpcion() {
    this.stateOptions = [
      { label: 'Todo', value: '1' },
      { label: 'Marca', value: '2' },
      { label: 'Precio', value: '3' },
      { label: 'Tamaño / cantidad', value: '4' },
      { label: 'Departamento', value: '5' }

    ];

  }

  bloqueaComponentes(caso: String) {

    console.log(caso)
    if (caso === '1') {
      this.visible = true;
      this.visibleOpciones = false;
      this.visibleBoton = true;
      this.visibleListaProductos = false;
    }

    if (caso === '5') {

      this.value = '1';
      this.visible = false;
      this.visibleOpciones = true;
      this.visibleBoton = false;
      this.visibleListaProductos = true;

    }


  }


  confirm() {
    this.confirmationService.confirm({
      header: 'Confirmación',
      message: 'Ingresa la cantidad de piezas deseadas' + this.textoTempora,
      icon: 'pi pi-cart-arrow-down',
      acceptLabel: 'Agregar',
      rejectLabel: 'Cancelar',
      accept: () => {
        this.messageService.add({ severity: 'success', summary: 'OK', detail: 'Agregadas al carrito' });
      },
      reject: () => {
        this.messageService.add({ severity: 'warn', summary: 'Cancelado', detail: 'No se guardó' });
      }
    });
  }
  detectarPantalla() {

    this.breakpointObserver.observe(['(max-width: 768px)'])
      .subscribe(result => {
        console.log("fon")
        this.esCelular = result.matches;
        this.cdr.markForCheck();
      });

  }
}
