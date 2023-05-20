import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EjerciciosRoutingModule } from './ejercicios-routing.module';
import { LeyaoutEjerciciosComponent } from './leyaout-ejercicios/leyaout-ejercicios.component';
import { Prueba1Component } from './prueba1/prueba1.component';
import { Prueba2Component } from './prueba2/prueba2.component';
import { FormsModule } from '@angular/forms';
import { Prueba3Component } from './prueba3/prueba3.component';
import { ComponentsModule } from '../components/components.module';
import { Prueba4Component } from './prueba4/prueba4.component';
import { Prueba5Component } from './prueba5/prueba5.component';
import { Prueba6Component } from './prueba6/prueba6.component';
import { Prueba7Component } from './prueba7/prueba7.component';
import { Prueba8Component } from './prueba8/prueba8.component';
import { Prueba9Component } from './prueba9/prueba9.component';


@NgModule({
  declarations: [
    LeyaoutEjerciciosComponent,
    Prueba1Component,
    Prueba2Component,
    Prueba3Component,
    Prueba4Component,
    Prueba5Component,
    Prueba6Component,
    Prueba7Component,
    Prueba8Component,
    Prueba9Component,
  ],
  imports: [
    CommonModule,
    EjerciciosRoutingModule,
    FormsModule,
    ComponentsModule
  ],
  exports: [
    LeyaoutEjerciciosComponent,
    Prueba1Component,
    Prueba2Component,
    Prueba3Component,
    Prueba4Component,
    Prueba5Component,
    Prueba6Component,
    Prueba7Component,
    Prueba8Component,
    Prueba9Component
  ]
})
export class EjerciciosModule { }
