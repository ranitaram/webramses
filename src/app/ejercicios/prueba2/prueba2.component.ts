import { Component } from '@angular/core';

@Component({
  selector: 'app-prueba2',
  templateUrl: './prueba2.component.html',
  styleUrls: ['./prueba2.component.css']
  
})

/*

Enunciado Ejercicio 2:
Dada una ruta absoluta de un archivo (de un sistema linux o basado en unix)
crear una función que la simplifique
 
Ejemplo:
simplificarRuta("/home/");             // Salida: /home
simplificarRuta("/x/./y/../../z/");    // Salida: /z
simplificarRuta("/../");               // Salida: /
simplificarRuta("/home//pruebas/");    // Salida: /home/pruebas
 
*/
export class Prueba2Component {
  ruta!: string; 
  rutaSimplificada: string | undefined;

  simplificar() {
    this.rutaSimplificada = this.simplificarRuta(this.ruta);
  }

  simplificarRuta(ruta: string): string {
    const componentes = ruta.split('/');
    const pila = [];
  
    for (const componente of componentes) {
      if (componente === '' || componente === '.') {
        // No hacemos nada
      } else if (componente === '..') {
        pila.pop();
      } else {
        pila.push(componente);
      }
    }
    let rutaSimplificada = '/' + pila.join('/');
    return rutaSimplificada;
  }
  
}