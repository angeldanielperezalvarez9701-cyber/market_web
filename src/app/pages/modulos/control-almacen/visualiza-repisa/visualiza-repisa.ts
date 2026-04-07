import { ChangeDetectorRef, Component, inject, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FloatLabelModule } from 'primeng/floatlabel';
import { TextareaModule } from 'primeng/textarea';
import { SelectModule } from 'primeng/select';
import { BadgeModule } from 'primeng/badge';
import { ProgressBarModule } from 'primeng/progressbar';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms'; //
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';
import { Dialog, DialogModule } from 'primeng/dialog';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { SeriviceRepisa } from '../../../../services/services-almacen/serivice-repisa';
import { ControlAlmacenUi } from '../../../../services/ui/control-almacen-ui';
import { Repisa } from '../../../../model/Repisa';
import { ServiceMueble } from '../../../../services/services-almacen/service-mueble';
import { UiGlobal } from '../../../../services/ui/ui-global';
import { EndPoitBase } from '../../../../utils/constantes/EnpoitBase';
import { ApiService } from '../../../../services/api-service';

@Component({
  selector: 'app-visualiza-repisa',
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
    DialogModule,
    DataViewModule,
    TagModule
  ],
  templateUrl: './visualiza-repisa.html',
  styleUrl: './visualiza-repisa.css',
  standalone: true,
  encapsulation: ViewEncapsulation.None
})
export class VisualizaRepisa {

  messageService = inject(MessageService);
  private confirmationService = inject(ConfirmationService);

  constructor(private api: ApiService, public serviceRepisa: SeriviceRepisa, public ui: ControlAlmacenUi, private serviceMueble: ServiceMueble, private uiGloba: UiGlobal, private cd: ChangeDetectorRef) { }

  verRepisa(repisa: Repisa) {

    var endpoint = EndPoitBase.URL_REPISA + EndPoitBase.URL_REPISA_LIST_X_ID;
    this.uiGloba.activaSpiner.set(true);
    repisa.mueble = this.serviceMueble.mueble;
    var idRepisa = repisa.idRepisa ?? 0;
    this.ui.formularioObjetoActivado = "formularioRepisa";

    this.api.getById(endpoint, idRepisa).subscribe({

      next: (data => {
        console.log("DATA", data);
        setTimeout(() => {
          this.serviceRepisa.repisa = data;
          this.uiGloba.activaSpiner.set(false);
          this.cd.detectChanges();
        });

      }), error: (err => {
        this.uiGloba.activaSpiner.set(false);
        this.serviceRepisa.error(err);
      })
    })

     this.ui.visible=true
  }

  
    confirm(event: Event, repisa: Repisa) {
      event.preventDefault();
      event.stopPropagation();
  
      this.confirmationService.confirm({
        message: '¿Estas seguro de eliminar la repisa?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => this.eliminaRepisa(repisa)
      });
  
    }

  
  eliminaRepisa(repisa: Repisa){

    console.log("Eliminando ...")
    var id = repisa.idRepisa;
    var endpoint = EndPoitBase.URL_REPISA + EndPoitBase.URL_ELIMINA_REPISA;

    this.api.delete(endpoint,id).subscribe({
      next: (data  => {
         this.serviceRepisa.getRepisaXMueble(this.serviceMueble.mueble);
         this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Repisa eliminada', life: 5000 });
      }), error: (err => {
          this.messageService.add({ severity: 'error', summary: 'Error Crítico', detail: 'Error al eliminar la repisa', life: 5000 });
        this.serviceRepisa.error(err);
      })
    })

  }
  retrocede() {
    this.serviceRepisa.limpia();
    this.ui.muestraContenedorMueble("verMueblePost");
  }
}
