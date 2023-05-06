import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeyaoutEjerciciosComponent } from './leyaout-ejercicios/leyaout-ejercicios.component';

const routes: Routes = [
  {path: 'ejercicios', component: LeyaoutEjerciciosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EjerciciosRoutingModule { }
