import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface PalabrasJson {
  palabras: string[];
}

@Component({
  selector: 'app-prueba4',
  templateUrl: './prueba4.component.html',
  styleUrls: ['./prueba4.component.css']
})
export class Prueba4Component {
  //VARIABLES
  palabras: string[] = [];
  // palabraSecreta: string = "angular";
  letrasDisponibles: string[] = "abcdefghijklmnopqrstuvwxyz".split("");
  letrasUsadas: string[] = [];
  intentos: number = 6;
  palabraActual: string = '';

  constructor(private http: HttpClient) {
    this.http.get<PalabrasJson>('assets/palabras.json').subscribe(data => {
      this.palabras = data.palabras;
      this.iniciarJuego();
    });
  }

  get palabraOculta(): string {
    return this.palabraActual
      .split("")
      .map(letra => (this.letrasUsadas.includes(letra) ? letra : "_"))
      .join(" ");
  }

  seleccionarLetra(letra: string) {
    this.letrasUsadas.push(letra);
    if (!this.palabraActual.includes(letra)) {
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
    const indice = Math.floor(Math.random() * this.palabras.length);
    this.palabraActual = this.palabras[indice];
    this.letrasUsadas = [];
    this.intentos = 6;
  }

  reiniciarJuego() {
    this.palabraActual = '';
    this.letrasUsadas = [];
    this.intentos = 6;
    this.iniciarJuego();
  }
    

  }

  

  

