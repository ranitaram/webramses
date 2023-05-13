import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsistenteRoutingModule } from './asistente-routing.module';
import { TomadedesisionesComponent } from './tomadedesisiones/tomadedesisiones.component';


@NgModule({
  declarations: [
    TomadedesisionesComponent
  ],
  imports: [
    CommonModule,
    AsistenteRoutingModule
  ],
  exports: [
    TomadedesisionesComponent
  ]
})
export class AsistenteModule { }
