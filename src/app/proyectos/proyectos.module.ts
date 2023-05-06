import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectosRoutingModule } from './proyectos-routing.module';
import { LeyaoutProyectosComponent } from './leyaout-proyectos/leyaout-proyectos.component';


@NgModule({
  declarations: [
    LeyaoutProyectosComponent
  ],
  imports: [
    CommonModule,
    ProyectosRoutingModule
  ],
  exports: [
    LeyaoutProyectosComponent
  ]
})
export class ProyectosModule { }
