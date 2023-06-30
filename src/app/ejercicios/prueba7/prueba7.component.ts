import { Component } from '@angular/core';

@Component({
  selector: 'app-prueba7',
  templateUrl: './prueba7.component.html',
  styleUrls: ['./prueba7.component.css']
})
//crear un programa que cuente las palabras de un texto
export class Prueba7Component {

  texto: string = '';
  contador: number = 0;

  contarPalabras() {
    if (this.texto.trim() === '') {
      this.contador = 0;
    } else {
      const palabras = this.texto.trim().split(' ');
      this.contador = palabras.length;
    }
    
  }

  


}
