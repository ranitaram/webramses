import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {GLOBAL} from "./GLOBAL";
import {HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";
import { CrearArticuloForm } from '../interfaces/crear-articulo-form.interface';
import { tap } from 'rxjs/operators';
import { ListarArticulos } from '../interfaces/listar-articulos.interface';
import { EditarArticuloForm } from '../interfaces/editar-articulo-form.interface';

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

//me trae los ultimos 10 articulos
 listarArticulos(): Observable<ListarArticulos[]>{
  return this.http.get<ListarArticulos[]>(`${base_url}articulos/ultimos`)
 }

 //me trae todos los articulos, para paginar
 listarTodosLosArticulos(limit?: number):  Observable<ListarArticulos[]>{
  let params = new HttpParams();
  if (limit) {
    params = params.append('limit', limit.toString());
  }
  return this.http.get<ListarArticulos[]>(`${base_url}articulos`,{params})
 }

 //me devuelte todos los articulos 
 listFullarticle(): Observable<ListarArticulos[]>{
  return this.http.get<ListarArticulos[]>(`${base_url}articulos`)
 }

 //me devuelve el articulo seleccionado
 obtenerUnArticulo(_id: string): Observable<ListarArticulos>{
  return this.http.get<ListarArticulos>(`${base_url}articulos/uno/${_id}`)
 }

 //borrar un articulo seleccionado
 borrarArticulo(_id: string): Observable<ListarArticulos>{
  return this.http.delete<ListarArticulos>(`${base_url}articulos/borrar/${_id}`, {
    headers: {
      'x-token': this.token
    }
  })
 }

 actualizarArticulo(articuloId: string, nuevoContenido: CrearArticuloForm): Observable<any> {
  
  return this.http.put<any>(`${base_url}articulos/actualizar/${articuloId}`, nuevoContenido, {
    headers: {
      'x-token': this.token
    }
  });
  
} 

subirImagen(articuloId: string, archivo: File): Observable<any>{
  const formData = new FormData();
  formData.append('file0', archivo);

  return this.http.post<any>(`${base_url}articulos/subir-imagen/${articuloId}`, formData, {
    headers: {
      'x-token': this.token
    }
  })
}

}
