import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

import { HomeRoutingModule } from './home/home-routing.module';
import { ProyectosRoutingModule } from './proyectos/proyectos-routing.module';
import { EjerciciosRoutingModule } from './ejercicios/ejercicios-routing.module';
import { AsistenteRoutingModule } from './asistente/asistente-routing.module';

const routes: Routes = [
//  {
//     path: 'inicio',
//     component : InicioComponent
//   }, 
 {
  path: 'inicio',
  loadChildren: ()=> import('./home/home.module').then(m => m.HomeModule)
 },
 {
  path: 'ejercicios',
  loadChildren: ()=> import('./ejercicios/ejercicios.module').then(m => m.EjerciciosModule)
 },
 {
  path: 'proyectos',
  loadChildren: ()=> import('./proyectos/proyectos.module').then(m => m.ProyectosModule)
 },
 {
  path: 'asistente',
  loadChildren: ()=> import('./asistente/asistente.module').then(m => m.AsistenteModule)
 },
 {
  path: 'blog',
  loadChildren: ()=> import('./home/home.module').then(m => m.HomeModule)
 },
 {
  path: 'auth',
  loadChildren: ()=> import('./auth/auth.module').then(m => m.AuthModule)
 },
 {
  path: 'payments',
  loadChildren: ()=> import('./payments/paymets.module').then(m => m.PaymetsModule)
 },
 {
  path: '404',
  component: NopagefoundComponent,
 },
 {
  path: '',
  redirectTo: 'inicio',
  pathMatch: 'full'
 },
 {
  path: '**',
  redirectTo: '404',
 }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'}),
    HomeRoutingModule,
    ProyectosRoutingModule,
    EjerciciosRoutingModule,
    AsistenteRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
