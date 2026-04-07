import { ChangeDetectorRef, Component, inject, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
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
import { ServiceMueble } from '../../../../services/services-almacen/service-mueble';
import { UiGlobal } from '../../../../services/ui/ui-global';
import { Mueble } from '../../../../model/Mueble';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { ControlRepisa } from "../control-repisa/control-repisa";
import { SeriviceRepisa } from '../../../../services/services-almacen/serivice-repisa';
import { ControlTipoProducto } from "../control-tipo-producto/control-tipo-producto";
import { TipoMueble } from '../../../../model/TipoMueble';
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
    DialogModule,
    FormularioMueble,
    DataViewModule,
    TagModule,
    MueblesControl,
    ControlRepisa,
    ControlTipoProducto
  ],
  templateUrl: './visualiza-almacen.html',
  styleUrl: './visualiza-almacen.css',
  standalone: true,
  encapsulation: ViewEncapsulation.None
})
export class VisualizaAlmacen implements OnInit , OnChanges{

  messageService = inject(MessageService);

  constructor(public ui: ControlAlmacenUi,
    public serviceAlmacen: ServiceAlmacenControl,
    public servicioUbicacion: ServiceUbicacionControl,
    public serviceMueble: ServiceMueble,
    public serviceRepi: SeriviceRepisa,
    public uiGlobal: UiGlobal, private cd: ChangeDetectorRef) {

  }


  ngOnInit(): void {
    var almacen = {} as Almacen;
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  onSubmit(form: any) {

  }

  editar(form: any) {

    this.servicioUbicacion.ubicacion = this.serviceAlmacen.almacen.ubicacion;
    this.ui.editaubicacionVista();
  }

  showDialogMueble() {

    this.serviceMueble.mueble.almacen = this.serviceAlmacen.almacen;
    this.ui.muestraModalAgregarMueble()
    console.log("Mueble ", this.serviceMueble.mueble)

  }

  verMueble(mueble: Mueble) {
    this.uiGlobal.activaSpiner.set(true);
    this.serviceMueble.getMuebleXId(mueble);
    this.ui.muestraContenedorMueble("getById");
    this.ui.tabActivo.set("1");
    this.cd.detectChanges();



  }

  guardarObjeto() {

    console.log("GUARDANDO ...")

    if ("formularioMueble" === this.ui.formularioObjetoActivado &&
      this.serviceMueble.mueble.almacen != null) {

      this.guardaMueble();

    }

    if ("formularioRepisa" === this.ui.formularioObjetoActivado && this.serviceRepi.repisa.idRepisa != null) {

      this.guardaRepisa();

    }

    if ("formularioTipoProducto" === this.ui.formularioObjetoActivado && this.serviceMueble.tipoMuebleObj != undefined) {

      this.guardaTipoMueble();

    }
  }

  guardaMueble() {

    console.log("GUARDANDO M ...", this.serviceMueble.mueble)

    if (this.serviceMueble.validaFormExterno() === null) {

      this.serviceMueble.guardaMuebleConRepiza(this.serviceMueble.mueble).subscribe({
        next: (data => {
          console.log("GUARDADO -->", this.serviceMueble.mueble)
          this.serviceMueble.limpia();
          this.ui.visible = false
          this.cd.detectChanges();
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Mueble agregado', life: 3000 });
        })
      });

    } else {

      var textoError: any = this.serviceMueble.validaFormExterno();
      this.messageService.add({ severity: 'error', summary: 'Error Crítico', detail: textoError ?? 'Error critico', life: 5000 });

    }


  }

  guardaRepisa() {

    this.uiGlobal.activaSpiner.set(true);

    if (this.serviceRepi.validFormExterno()) {

      this.serviceRepi.repisa.mueble = this.serviceMueble.mueble;

      this.serviceRepi.guardaRepiza(this.serviceRepi.repisa).subscribe({
        next: (data => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Repisa Agregada', life: 5000 });
          this.ui.visible = false;
        })
      })

    } else {
      var textoError = this.serviceRepi.validFormExterno();
      this.messageService.add({ severity: 'error', summary: 'Error Crítico', detail: textoError, life: 5000 });

    }

  }


  guardaTipoMueble() {

    var message = this.serviceMueble.validaFormExternoTM();
    console.log("Guardando TM ...")

    if (message === null) {
      this.serviceMueble.guardaTipoMueble(this.serviceMueble.tipoMuebleObj).subscribe({
        next: (data => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Tipo mueble agregado', life: 5000 });
          this.ui.visible = false;
        })
      })

    } else {
      this.messageService.add({ severity: 'error', summary: 'Error Crítico', detail: message, life: 5000 });

    }

  }


  close() {

    if ("formularioMueble" === this.ui.formularioObjetoActivado) {
      this.ui.visible = false
      this.serviceMueble.limpia();
    }

    if ("formularioRepisa" === this.ui.formularioObjetoActivado) {
      this.ui.nuevaRepisa = true;
      this.serviceRepi.limpia();
      this.ui.visible = false;

    }

    if("formularioTipoProducto" === this.ui.formularioObjetoActivado){
      this.ui.nuevoTipoProducto=true;
      this.serviceMueble.tipoMuebleObj = {} as TipoMueble;
      this.ui.visible = false;
    }

  }

  listar(value: string | number) {

    if ("1" === value && this.serviceAlmacen.almacen != null) {

      this.serviceMueble.getAllMuebleXAlmacen(this.serviceAlmacen.almacen);

    }

    if("0" === value){
      
      this.ui.muestraContenidoPrincipal("retrocede");
    }

  }
  retrocede() {
    this.serviceAlmacen.limpiaVariables();
    this.ui.muestraContenidoPrincipal('retrocede')
    this.serviceMueble.mueble = {} as Mueble;
  }
}
