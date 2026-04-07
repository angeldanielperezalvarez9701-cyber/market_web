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
import { SeriviceRepisa } from '../../../../services/services-almacen/serivice-repisa';
import { ControlAlmacenUi } from '../../../../services/ui/control-almacen-ui';
import { Repisa } from '../../../../model/Repisa';
import { ServiceMueble } from '../../../../services/services-almacen/service-mueble';
import { OrderListModule } from 'primeng/orderlist';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-control-repisa',
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
    OrderListModule,
    NgClass
  ],
  templateUrl: './control-repisa.html',
  styleUrl: './control-repisa.css',
  standalone: true,
  encapsulation: ViewEncapsulation.None
})
export class ControlRepisa implements OnInit, OnChanges {


  messageService = inject(MessageService);

  constructor(public serviceRepisa: SeriviceRepisa,
    public ui: ControlAlmacenUi,
    public servicioMueble: ServiceMueble,
    private cd: ChangeDetectorRef) {

  }

  ngOnInit(): void {

    var repisa = {} as Repisa;

    if (this.ui.nuevaRepisa) {

      this.serviceRepisa.repisa = this.serviceRepisa.objetoRepisa(repisa);
    }

  }

  ngOnChanges(changes: SimpleChanges): void {

    var repisa = {} as Repisa;

    if (this.ui.nuevaRepisa) {

      this.serviceRepisa.repisa = this.serviceRepisa.objetoRepisa(repisa);
    }
    
  }

  ngAfterViewInit() {
    this.cd.detectChanges();
  }

  agregaRepisas(form: any) {

    if (form.valid) {
      this.serviceRepisa.repisasAgregar.push({ ...this.serviceRepisa.repisa });
      this.serviceRepisa.repisasAgregar = [...this.serviceRepisa.repisasAgregar];
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Repiza Agregda agregada', life: 4000 });
      form.resetForm();
      this.cd.detectChanges();
    }

  }

  onSubmit(form: any) {

    this.servicioMueble.mueble.repisas = this.serviceRepisa.repisasAgregar
    this.ui.contenidoAOcultarRepisa = true
    console.log("Mueble", this.servicioMueble.mueble)
  }

  limpiar(form: any) {

    this.serviceRepisa.repisasAgregar = [];
    this.ui.agregarRepisa = true;
  }

  eliminarRepisa(event: Event, option: any) {

    event.stopPropagation(); // evita que el click seleccione el item en el listbox
    const index = this.serviceRepisa.repisasAgregar.indexOf(option);
    if (index !== -1) {
      this.serviceRepisa.repisasAgregar.splice(index, 1);
    }
    this.cd.detectChanges();
  }
}
