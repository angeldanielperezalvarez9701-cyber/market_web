import { ChangeDetectorRef, Component, inject, Input, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
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
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms'; //
import { ControlProductoUiService } from '../../../../services/ui/control-producto-ui-service';
import { Producto } from '../../../../model/Producto';
import { ApiService } from '../../../../services/api-service';
import { EndPoitBase } from '../../../../utils/constantes/EnpoitBase';
import { FormConrolProductoUI } from './form-control-producto-ui';
import { ServiceProducts } from '../../../../services/services-product/service-products';


@Component({
  selector: 'app-form-control-producto',
  imports: [MessageModule, ToastModule,
    ButtonModule, InputTextModule,
    FormsModule, ReactiveFormsModule,
    InputNumberModule, FloatLabelModule,
    TextareaModule, SelectModule, BadgeModule, ButtonModule, FileUploadModule, ProgressBarModule, ToastModule],
  templateUrl: './form-control-producto.html',
  styleUrl: './form-control-producto.css',
  standalone: true,
  encapsulation: ViewEncapsulation.None
})
export class FormControlProducto implements OnInit {

  messageService = inject(MessageService);
  @Input() productoSeleccionado!: Producto | any
  user: any;
  precioProducto: number = 0;
  value: string = '';
  uploadedFiles: any[] = [];
  subtipoProducto: Array<any> = [];
  selectedTipoProd: string | undefined;
  selectedSubTioProd: string | undefined;


  formUi = new FormConrolProductoUI();
  urlEndpointBase: string = EndPoitBase.URL_BASE_TIPO_PRODUCTO;

  constructor(public ui: ControlProductoUiService,
    private api: ApiService,
    public serviceProduc: ServiceProducts,
    private cd: ChangeDetectorRef) { }

  ngOnInit(): void {

    var productoInicial = {} as Producto;
    this.subtipoProducto = this.formUi.subtipoProductoList();
    this.ui.producto = this.formUi.generaProductoObject(productoInicial);
    this.listaTipoProducto();

  }

  ngOnChanges(changes: SimpleChanges) {

    if (this.productoSeleccionado.idProducto != undefined) {
      this.ui.producto = this.formUi.generaProductoObject(this.productoSeleccionado);
      this.ui.vistaPagina = "listaProductoAgregado"
    }

  }

  onSubmit(form: any) {

    var endpoit = EndPoitBase.URL_PRODUCTO + EndPoitBase.URL_SALVA_PRODUCTO;
    if (form.valid) {

      this.api.save(endpoit, this.ui.producto).subscribe(data => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form Submitted', life: 3000 });
        this.serviceProduc.getProductos();
        this.cd.detectChanges();
        this.ui.muestraContenedorPrincipal("listaProductoAgregado");
      })

      //form.resetForm();
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Campos incorrectos', life: 3000 });
    }

  }

 listaTipoProducto() {
  
    var endpoint = EndPoitBase.URL_BASE_TIPO_PRODUCTO + EndPoitBase.URL_LISTA_TIPO_PRODUCTO;

    this.api.getAll(endpoint).subscribe({
      next: (data) => {

        this.ui.listaTipoProducto.set([...data]);
        this.cd.detectChanges();
      }
    })

  }


  limpiar(form: any) {

    form.resetForm();
    this.productoSeleccionado = null

  }

  onUpload(event: any): void {
    const count = event.files?.length ?? 0;

    this.serviceProduc.convertirArchivoABytes(event.files[0]).then(bytes => {

      this.ui.producto.imagenProducto = Array.from(bytes);

      this.messageService.add({
        severity: 'success',
        summary: 'Carga completada',
        detail: `${count} archivo(s) subido(s)`
      });


    })

  }


}
