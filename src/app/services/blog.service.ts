import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {GLOBAL} from "./GLOBAL";
import {HttpClient} from "@angular/common/http";
import { CrearArticuloForm } from '../interfaces/crear-articulo-form.interface';
import { tap } from 'rxjs/operators';

const base_url = GLOBAL.url;
@Injectable({
  providedIn: 'root'
})
export class BlogService {
 
  constructor(private http: HttpClient) { }

 crearArticulo(formData: CrearArticuloForm){
  return this.http.post(`${base_url}articulos/crear`, formData)
  .pipe(
    tap((resp: any)=>{
      console.log(resp);
    })
  )
 }
}
