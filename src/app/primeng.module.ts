import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
@NgModule({

  exports: [
    InputTextModule,
    ButtonModule,
    ConfirmDialogModule,
    InputTextareaModule,
    CheckboxModule
  ]
})
export class PrimeNGModule { }
