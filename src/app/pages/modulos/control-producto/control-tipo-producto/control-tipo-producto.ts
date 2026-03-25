import { ChangeDetectorRef, Component, inject, Input, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { ServiceProducts } from '../../../../services/services-product/service-products';
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
import { FileUploadModule } from 'primeng/fileupload';
import { ProgressBarModule } from 'primeng/progressbar';
import { ControlProductoUiService } from '../../../../services/ui/control-producto-ui-service';
import { TipoProducto } from '../../../../model/TipoProducto';
import { ControlTipoProductoUi } from './control-tipo-producto-ui';
import { ApiService } from '../../../../services/api-service';
import { EndPoitBase } from '../../../../utils/constantes/EnpoitBase';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
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
    FileUploadModule,
    ProgressBarModule,
    ConfirmDialogModule

  ],
  templateUrl: './control-tipo-producto.html',
  styleUrl: './control-tipo-producto.css',
})
export class ControlTipoProducto implements OnInit {

  @Input() tipoProductoSeleccionado !: TipoProducto | any;
  tipoProductioUi = new ControlTipoProductoUi();
  messageService = inject(MessageService);
  endpointBase: string = EndPoitBase.URL_BASE_TIPO_PRODUCTO

  constructor(public ui: ControlProductoUiService, public productoService: ServiceProducts, private cd: ChangeDetectorRef,
    public api: ApiService
  ) { }

  ngOnInit(): void {

    var tipoProducto = {} as TipoProducto;

    this.ui.tipoProducto = this.tipoProductioUi.tipoProductoObject(tipoProducto);

    console.log("TIPO PRODU ", this.tipoProductoSeleccionado)
  }

  ngOnChanges(changes: SimpleChanges) {

    console.log("Tipo producto change")
    if (this.tipoProductoSeleccionado.idTipoProducto != null) {
      this.ui.tipoProducto = this.tipoProductioUi.tipoProductoObject(this.tipoProductoSeleccionado)
    }

  }


  onSubmit(form: any) {

    var enpoint = this.endpointBase + EndPoitBase.URL_SALVA_TIPO_PRODUCTO;

    if (form.valid) {
      this.api.save(enpoint, this.ui.tipoProducto).subscribe({

        next: (data) => {

          this.productoService.getTipoProducto();
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Tipo Producto Guardado', life: 3000 });
          this.limpiar(form);
          this.cd.detectChanges();
          this.ui.muestraContenedorPrincipal("muestraListaOcultaTipoP");
        },
        error: (err) => {
          this.productoService.errorCliente(err.status);
        }
      })

    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Campos incorrectos', life: 3000 });
    }

  }

  limpiar(form: any) {

    form.resetForm();
    this.ui.tipoProducto = {} as TipoProducto;
    this.tipoProductoSeleccionado = null;
  }
}
