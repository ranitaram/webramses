import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HomeModule } from './home/home.module';
import { EjerciciosModule } from './ejercicios/ejercicios.module';
import { ProyectosModule } from './proyectos/proyectos.module';

@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    EjerciciosModule,
    ProyectosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
