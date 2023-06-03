import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {
  constructor(private usuarioService: UsuarioService, private router: Router) {}

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
    const userEmail = this.usuarioService.getCurrentUserEmail();
    
    const allowedEmail = 'veraramses1234@gmail.com';

    
    if (userEmail === allowedEmail) {
      return true;
    } else {
      this.router.navigate(['/inicio']);
      return false;
    }
  }
}
