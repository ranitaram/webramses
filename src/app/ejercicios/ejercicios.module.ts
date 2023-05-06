import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EjerciciosRoutingModule } from './ejercicios-routing.module';
import { LeyaoutEjerciciosComponent } from './leyaout-ejercicios/leyaout-ejercicios.component';


@NgModule({
  declarations: [
    LeyaoutEjerciciosComponent
  ],
  imports: [
    CommonModule,
    EjerciciosRoutingModule
  ],
  exports: [
    LeyaoutEjerciciosComponent
  ]
})
export class EjerciciosModule { }
