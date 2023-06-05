import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private usuarioService: UsuarioService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      // console.log('paso por el guard');
      // return false;
    const userEmail = this.usuarioService.getCurrentUserEmail();
    
    const allowedEmail = 'veraramses1234@gmail.com';
      
    
    if (userEmail === allowedEmail) {
      console.log('paso por el canActivate');
      return true;
    } else {
      this.router.navigate(['/inicio']);
      return false;
    }
  }
}
