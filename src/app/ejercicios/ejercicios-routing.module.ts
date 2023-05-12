import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeyaoutEjerciciosComponent } from './leyaout-ejercicios/leyaout-ejercicios.component';
import { Prueba1Component } from './prueba1/prueba1.component';
import { Prueba2Component } from './prueba2/prueba2.component';
import { Prueba3Component } from './prueba3/prueba3.component';
import { Prueba4Component } from './prueba4/prueba4.component';
import { Prueba5Component } from './prueba5/prueba5.component';
import { Prueba6Component } from './prueba6/prueba6.component';

const routes: Routes = [
  {path: 'ejercicios', component: LeyaoutEjerciciosComponent },
  {path: 'prueba1', component: Prueba1Component},
  {path: 'prueba2', component: Prueba2Component},
  {path: 'prueba3', component: Prueba3Component},
  {path: 'prueba4', component: Prueba4Component},
  {path: 'prueba5', component: Prueba5Component},
  {path: 'prueba6', component: Prueba6Component},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EjerciciosRoutingModule { }
