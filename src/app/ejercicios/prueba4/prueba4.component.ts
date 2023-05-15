import { Component } from '@angular/core';

@Component({
  selector: 'app-prueba4',
  templateUrl: './prueba4.component.html',
  styleUrls: ['./prueba4.component.css']
})
export class Prueba4Component {
  //VARIABLES
  palabraSecreta: string = "angular";
  letrasDisponibles: string[] = "abcdefghijklmnopqrstuvwxyz".split("");
  letrasUsadas: string[] = [];
  intentos: number = 6;

  get palabraOculta(): string {
    return this.palabraSecreta
      .split("")
      .map(letra => (this.letrasUsadas.includes(letra) ? letra : "_"))
      .join(" ");
  }

  seleccionarLetra(letra: string) {
    this.letrasUsadas.push(letra);
    if (!this.palabraSecreta.includes(letra)) {
      this.intentos--;
    }
  }

  verificarPerdida() {
    return this.intentos === 0;
  }

  verificarGanada() {
    return !this.palabraOculta.includes("_");
  }

  iniciarJuego() {
    this.palabraSecreta = "angular";
    this.letrasUsadas = [];
    this.intentos = 6;
  }
    

  }

  

  

