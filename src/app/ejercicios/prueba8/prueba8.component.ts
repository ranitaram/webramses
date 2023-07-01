import { Component } from '@angular/core';

@Component({
  selector: 'app-prueba8',
  templateUrl: './prueba8.component.html',
  styleUrls: ['./prueba8.component.css']
})
export class Prueba8Component {
  textoUsuario: string = '';
  textoSimulado: string = '';

 

  simularEscritura() {
    const velocidadEscritura = 20; 
    const texto = this.textoUsuario;
    let index = 0;

    this.textoSimulado = '';
   

    const escribirTexto = () => {
      this.textoSimulado += texto.charAt(index);
      index++;

      const textareaSimulado = document.getElementById('textoSimulado');
      if (textareaSimulado) {
        textareaSimulado.scrollTop = textareaSimulado.scrollHeight;
      }

      if (index < texto.length) {
        setTimeout(escribirTexto, velocidadEscritura);
      }
    };

    escribirTexto();
  }  
}
