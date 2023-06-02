import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HomeModule } from './home/home.module';
import { EjerciciosModule } from './ejercicios/ejercicios.module';
import { ProyectosModule } from './proyectos/proyectos.module';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { AsistenteModule } from './asistente/asistente.module';
import { AuthModule } from './auth/auth.module';
import { EditorModule, TINYMCE_SCRIPT_SRC  } from '@tinymce/tinymce-angular';
@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent
  ],
  imports: [
    AuthModule,
    AppRoutingModule,
    AsistenteModule,
    BrowserModule,
    ComponentsModule,
    EjerciciosModule,
    HomeModule,
    HttpClientModule,
    FormsModule,
    ProyectosModule,
    EditorModule
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
    { provide: LOCALE_ID, useValue: 'en-US' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
