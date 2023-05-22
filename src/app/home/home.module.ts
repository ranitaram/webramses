import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { PoliticasDePrivacidadComponent } from './politicas-de-privacidad/politicas-de-privacidad.component';
import { TerminosCondicionesComponent } from './terminos-condiciones/terminos-condiciones.component';
import { BlogComponent } from './blog/blog.component';
import { ArticuloComponent } from './blog/articulo/articulo.component';


@NgModule({
  declarations: [
    InicioComponent,
    PoliticasDePrivacidadComponent,
    TerminosCondicionesComponent,
    BlogComponent,
    ArticuloComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    InicioComponent,
    PoliticasDePrivacidadComponent,
    TerminosCondicionesComponent,
    BlogComponent,
    ArticuloComponent
  ]
})
export class HomeModule { }
