import { Injectable } from '@angular/core';
import {tap} from "rxjs";
import {GLOBAL} from "./GLOBAL";
import {HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";


const base_url = GLOBAL.url;



@Injectable({
  providedIn: 'root'
})
export class PaymentService {

 
  constructor(private http: HttpClient) { }

  generarPagoLandingPage(data: any){
    return this.http.post<any>(`${base_url}payment/create-checkout-session`,data)
    .pipe(
      tap((resp: any)=>{
        console.log(resp);
      })
    )
  }

  generarPagoBasico(data: any){
    return this.http.post<any>(`${base_url}payment/create-checkout-basico`, data)
    .pipe(
      tap((resp: any)=> {
        console.log(resp);
      })
      )
  }

  generarPagoEstandar(data: any){
    return this.http.post<any>(`${base_url}payment/create-checkout-estandar`, data)
    .pipe(
      tap((resp: any)=> {
        console.log(resp);
      })
    )
  }
  
  generarPagoPremium(data: any){
    return this.http.post<any>(`${base_url}payment/create-checkout-premium`, data)
    .pipe(
      tap((resp: any)=> {
        console.log(resp);
      })
    )
  }
}
