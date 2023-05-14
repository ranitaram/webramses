import { Component } from '@angular/core';


@Component({
  selector: 'app-prueba3',
  templateUrl: './prueba3.component.html',
  styleUrls: ['./prueba3.component.css']
})

/*

Ejercicio 3:
Dadas dos fechas, crea una función que me proporcione la diferencia de dias
entre ellas
 
Ejemplo:
diferenciaDeDias('Dec 1, 2023', 'Dec 24, 2023');  // Salida: 23
 
*/
export class Prueba3Component {
  fecha1: string = '';
  fecha2: string = '';
  diferencia: number = 0;

  calcularDiferencia(){
    const date1 = new Date(this.fecha1);
    const date2 = new Date(this.fecha2);
    const diffTime = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    this.diferencia = diffDays;
  }
  
}
