import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterForm } from '../interfaces/register-form.interface';
import { GLOBAL } from './GLOBAL';
import { LoginForm } from '../interfaces/login-form.interface';

const base_url = GLOBAL.url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  crearUsuario(formData: RegisterForm){
    return this.http.post(`${base_url}usuarios/crear`, formData);
  }

  login(formData: LoginForm){
    return this.http.post(`${base_url}login`,formData);
  }
}
