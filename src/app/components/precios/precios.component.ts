import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { of } from 'rxjs';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styleUrls: ['./precios.component.css']
})
export class PreciosComponent implements OnInit{

  constructor(private paymentService: PaymentService){}
  
  
  ngOnInit(): void {
   
  }

  generarOrdenPago(){
    this.paymentService.generarPagoLandingPage(data)
    .subscribe({
      next: resp => {
        console.log(resp);
        //redireccionar a la url
        window.location.href = resp.url;
      },
      error: err => {
        console.log(err);
        return of(null);
      }
    })
  }

  generarOrdenPagoBasico(){
    this.paymentService.generarPagoBasico(data)
    .subscribe({
      next: resp => {
        console.log(resp);
        window.location.href = resp.url;
      },
      error: err => {
        console.log(err);
        return of(null);
      }
    })
  }
  generarOrdenPagoEstandar(){
    this.paymentService.generarPagoEstandar(data)
    .subscribe({
      next: resp => {
        console.log(resp);
        window.location.href = resp.url;
      },
      error: err => {
        console.log(err);
        return of(null);
      }
    })
  }
  generarOrdenPagoPremium(){
    this.paymentService.generarPagoPremium(data)
    .subscribe({
      next: resp => {
        console.log(resp);
        window.location.href = resp.url;
      },
      error: err => {
        console.log(err);
        return of(null);
      }
    })
  }

}
