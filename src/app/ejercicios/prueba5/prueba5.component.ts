import { Component } from '@angular/core';

@Component({
  selector: 'app-prueba5',
  templateUrl: './prueba5.component.html',
  styleUrls: ['./prueba5.component.css']
})
/*
Enunciado Ejercicio 5:
Dado un array de personas con nombres y apellidos
crear una función para ordenar el array por los apellidos
en orden alfabético
 
Ejemplo:
ordenarPorApellidos([
    "Víctor Robles",
    "Antonio Alcantara",
    "Al Pacino",
    "Robert DeNiro",
    "Brad Pitt",
    "Sylvester Stallone"
]);  
 
*/
export class Prueba5Component {
  nombres: string[] = 
  [
    "Juan Perez", 
    "Laura Guzman", 
    "Carlos Rivera", 
    "Natalia Hernandez", 
    "Jose Martinez"
  ];

  nombresOrdenados: string[] = [];

  constructor(){ 
    this.nombresOrdenados = this.ordenarPorApellido(this.nombres);
  }

  ordenarPorApellido(personas: string[]){
    const nombresOrdenados = 
    personas.sort((a, b) => a.split(" ")[1].localeCompare(b.split(" ")[1]));
  
    return nombresOrdenados;
  }
  
  
}
