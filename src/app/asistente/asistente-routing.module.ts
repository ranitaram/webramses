import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TomadedesisionesComponent } from './tomadedesisiones/tomadedesisiones.component';

const routes: Routes = [
  {path: 'asistente', component: TomadedesisionesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsistenteRoutingModule { }
