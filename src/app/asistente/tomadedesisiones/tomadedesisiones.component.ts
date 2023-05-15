import { Component } from '@angular/core';
// import * as $ from 'jquery';

@Component({
  selector: 'app-tomadedesisiones',
  templateUrl: './tomadedesisiones.component.html',
  styleUrls: ['./tomadedesisiones.component.css']
})
export class TomadedesisionesComponent {
  // title = 'Asistente de decisiones';
  

  constructor() { }

  // ngOnInit(): void {
  //   $('form').submit(function(event: { preventDefault: () => void; }) {
  //     event.preventDefault();
  //     var question = $('#question').val();
  //     $.ajax({
  //       url: 'URL_DEL_SERVICIO',
  //       method: 'POST',
  //       contentType: 'application/json',
  //       data: JSON.stringify({ question: question }),
  //       success: function(response: { recommendation: any; }) {
  //         $('.recommendation p').text(response.recommendation);
  //         $('.recommendation').show();
  //       },
  //       error: function() {
  //         alert('Ha ocurrido un error al procesar la solicitud.');
  //       }
  //     });
  //   });
  // }

}
