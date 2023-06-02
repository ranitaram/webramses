import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {GLOBAL} from "./GLOBAL";
import {HttpClient, HttpParams} from "@angular/common/http";
import { CrearArticuloForm } from '../interfaces/crear-articulo-form.interface';
import { tap } from 'rxjs/operators';
import { ListarArticulos } from '../interfaces/listar-articulos.interface';

const base_url = GLOBAL.url;

@Injectable({
  providedIn: 'root'
})
export class BlogService {


 
  constructor(private http: HttpClient) { }

  get token(): string{
    return localStorage.getItem('token') || '';
  }

 crearArticulo(formData: CrearArticuloForm){
  return this.http.post(`${base_url}articulos/crear`, formData, {
    headers: {
      'x-token': this.token
    }
  })
  .pipe(
    tap((resp: any)=>{
      console.log(resp);
    })
  )
 }


 listarArticulos(): Observable<ListarArticulos[]>{
  return this.http.get<ListarArticulos[]>(`${base_url}articulos/ultimos`)
 }

 listarTodosLosArticulos(limit?: number):  Observable<ListarArticulos[]>{
  let params = new HttpParams();
  if (limit) {
    params = params.append('limit', limit.toString());
  }
  return this.http.get<ListarArticulos[]>(`${base_url}articulos`,{params})
 }

 obtenerUnArticulo(_id: string): Observable<ListarArticulos>{
  return this.http.get<ListarArticulos>(`${base_url}articulos/uno/${_id}`)
 }
}
