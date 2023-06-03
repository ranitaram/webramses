import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterForm } from '../interfaces/register-form.interface';
import { GLOBAL } from './GLOBAL';
import { LoginForm } from '../interfaces/login-form.interface';
import { tap } from 'rxjs/operators';

const base_url = GLOBAL.url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  crearUsuario(formData: RegisterForm){
    return this.http.post(`${base_url}usuarios/crear`, formData)
    .pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.token)
      })
    )
  }

  login(formData: LoginForm){
    return this.http.post(`${base_url}login`,formData)
    .pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.token)
      })
    )
  }

  loginGoogle(token: string){
    return this.http.post(`${base_url}login/google`,{token})
    .pipe(
      tap((resp: any) => {
        //console.log(resp);
        localStorage.setItem('token', resp.token);
         // Guardar el correo electrónico en el localStorage o en otra variable
        localStorage.setItem('email', resp.email); // Suponiendo que la respuesta contiene el correo electrónico del usuario
      })
    );
  }

  getCurrentUserEmail() {
    return localStorage.getItem('email'); // Obtener el correo electrónico almacenado en el localStorage
  }

}
