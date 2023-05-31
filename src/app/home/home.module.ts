import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { PoliticasDePrivacidadComponent } from './politicas-de-privacidad/politicas-de-privacidad.component';
import { TerminosCondicionesComponent } from './terminos-condiciones/terminos-condiciones.component';
import { BlogComponent } from './blog/blog.component';
import { ArticuloComponent } from './blog/articulo/articulo.component';
import { CrearArticuloComponent } from './blog/crear-articulo/crear-articulo.component';
import { EditorModule } from '@tinymce/tinymce-angular';

@NgModule({
  declarations: [
    InicioComponent,
    PoliticasDePrivacidadComponent,
    TerminosCondicionesComponent,
    BlogComponent,
    ArticuloComponent,
    CrearArticuloComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    EditorModule
  ],
  exports: [
    InicioComponent,
    PoliticasDePrivacidadComponent,
    TerminosCondicionesComponent,
    BlogComponent,
    ArticuloComponent,
    CrearArticuloComponent,
    
  ]
})
export class HomeModule { }
