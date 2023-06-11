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
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfigArticuloComponent } from './blog/config-articulo/config-articulo.component';
import { EditarArticuloComponent } from './blog/editar-articulo/editar-articulo.component';
import { SubirImagenComponent } from './blog/subir-imagen/subir-imagen.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ComponentsModule } from '../components/components.module';
import { BotonflotanteComponent } from '../components/botonflotante/botonflotante.component';

@NgModule({
  declarations: [
    InicioComponent,
    PoliticasDePrivacidadComponent,
    TerminosCondicionesComponent,
    BlogComponent,
    ArticuloComponent,
    CrearArticuloComponent,
    ConfigArticuloComponent,
    EditarArticuloComponent,
    SubirImagenComponent,
    LandingpageComponent,
    BotonflotanteComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    EditorModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
  ],
  exports: [
    ArticuloComponent,
    BlogComponent,
    CrearArticuloComponent,
    ConfigArticuloComponent,
    InicioComponent,
    PoliticasDePrivacidadComponent,
    TerminosCondicionesComponent,
    EditarArticuloComponent,
    SubirImagenComponent,
    LandingpageComponent
    
  ]
})
export class HomeModule { }
