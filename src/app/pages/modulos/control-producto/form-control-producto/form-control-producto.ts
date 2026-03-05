import { Component, inject, OnInit ,ViewEncapsulation} from '@angular/core';
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
import { TipoProducto } from '../../../../model/TipoProducto';

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
  user: any;
  precioProducto: number = 0;
  value: string = '';
  uploadedFiles: any[] = [];

  /**
   * Temporal
   */

  tipoProducto: TipoProducto[] = [];
  selectedCity: TipoProducto | undefined;

  ngOnInit(): void {

    this.tipoProducto = [
      { idTipoProducto: 1, nombre: "Lacteos", descripcionProducto: "Productos de origuen lacteo" }
    ]
  }

  exampleForm = new FormGroup({
    username: new FormControl('', Validators.required)
  });

  onSubmit(form: any) {
    if (form.valid) {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form Submitted', life: 3000 });
      form.resetForm();
    }
  }

 onUpload(event: any): void {
  const count = event.files?.length ?? 0;

  this.messageService.add({
    severity: 'success',
    summary: 'Carga completada',
    detail: `${count} archivo(s) subido(s)`
  });
}
}
