import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HomeModule } from './home/home.module';
import { EjerciciosModule } from './ejercicios/ejercicios.module';
import { ProyectosModule } from './proyectos/proyectos.module';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ComponentsModule,
    EjerciciosModule,
    HomeModule,
    FormsModule,
    ProyectosModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
