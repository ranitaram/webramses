import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeyaoutProyectosComponent } from './leyaout-proyectos/leyaout-proyectos.component';

const routes: Routes = [
  {
    path:'proyectos', component: LeyaoutProyectosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectosRoutingModule { }
