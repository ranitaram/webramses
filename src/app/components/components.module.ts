import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { PreciosComponent } from './precios/precios.component';



@NgModule({
  declarations: [
    ModalComponent,
    PreciosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalComponent,
    PreciosComponent
  ]
})
export class ComponentsModule { }
