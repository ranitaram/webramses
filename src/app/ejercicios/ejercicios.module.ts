import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EjerciciosRoutingModule } from './ejercicios-routing.module';
import { LeyaoutEjerciciosComponent } from './leyaout-ejercicios/leyaout-ejercicios.component';
import { Prueba1Component } from './prueba1/prueba1.component';


@NgModule({
  declarations: [
    LeyaoutEjerciciosComponent,
    Prueba1Component
  ],
  imports: [
    CommonModule,
    EjerciciosRoutingModule
  ],
  exports: [
    LeyaoutEjerciciosComponent,
    Prueba1Component,
  ]
})
export class EjerciciosModule { }
