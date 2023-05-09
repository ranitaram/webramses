import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EjerciciosRoutingModule } from './ejercicios-routing.module';
import { LeyaoutEjerciciosComponent } from './leyaout-ejercicios/leyaout-ejercicios.component';
import { Prueba1Component } from './prueba1/prueba1.component';
import { Prueba2Component } from './prueba2/prueba2.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LeyaoutEjerciciosComponent,
    Prueba1Component,
    Prueba2Component
  ],
  imports: [
    CommonModule,
    EjerciciosRoutingModule,
    FormsModule,
  ],
  exports: [
    LeyaoutEjerciciosComponent,
    Prueba1Component,
    Prueba2Component,
  ]
})
export class EjerciciosModule { }
