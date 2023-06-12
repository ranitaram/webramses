import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { PreciosComponent } from './precios/precios.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ModalComponent,
    PreciosComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ModalComponent,
    PreciosComponent
  ]
})
export class ComponentsModule { }
