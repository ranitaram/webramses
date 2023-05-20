import { Component } from '@angular/core';

@Component({
  selector: 'app-prueba6',
  templateUrl: './prueba6.component.html',
  styleUrls: ['./prueba6.component.css']
})
/*
Ejercicio 6:
Dado un año actual, crea un programa que me muestre 
los años bisiestos que habrá en los proximos 30 años
 
Ejemplo:
bisiestos(2023);
 
Salida:
2024
2028
2032
2036
2040
2044
2048
2052
 
*/

export class Prueba6Component {
  anosLimite: number;

  constructor(){
    this.anosLimite = new Date().getFullYear();
  }

  getProximosAnosBisiestos(comenzarAno: number, contador: number ): number[]{
    const anosBisiestos: number[] = [];
    let ano = comenzarAno + 1;

    while (anosBisiestos.length < contador){
      if (this.esAnoBisiesto(ano)) {
        anosBisiestos.push(ano);
      }
      ano++;
    }
    return anosBisiestos;
  }

  esAnoBisiesto(ano: number): boolean{
    return (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
  }
}

