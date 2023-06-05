import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { InicioComponent } from './inicio/inicio.component';
import { PoliticasDePrivacidadComponent } from './politicas-de-privacidad/politicas-de-privacidad.component';
import { TerminosCondicionesComponent } from './terminos-condiciones/terminos-condiciones.component';
import { BlogComponent } from './blog/blog.component';
import { ArticuloComponent } from './blog/articulo/articulo.component';
import { CrearArticuloComponent } from './blog/crear-articulo/crear-articulo.component';
import { ConfigArticuloComponent } from './blog/config-articulo/config-articulo.component';
import { EditarArticuloComponent } from './blog/editar-articulo/editar-articulo.component';
import { SubirImagenComponent } from './blog/subir-imagen/subir-imagen.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent,},
  {path: 'politicas', component: PoliticasDePrivacidadComponent},
  {path: 'terminos', component: TerminosCondicionesComponent},
  {path: 'blog',component: BlogComponent},
  {path: 'blog/articulo/:id', component: ArticuloComponent},
  {path: 'blog/crear', component: CrearArticuloComponent, canActivate: [AuthGuard]},
  {path: 'blog/config', component: ConfigArticuloComponent, canActivate: [AuthGuard] },
  {path: 'blog/editar/:id', component: EditarArticuloComponent, canActivate: [AuthGuard]},
  {path: 'blog/subir/:id', component: SubirImagenComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
