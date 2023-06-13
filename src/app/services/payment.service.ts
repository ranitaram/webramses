import { Injectable } from '@angular/core';
import {Observable, tap} from "rxjs";
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
}
