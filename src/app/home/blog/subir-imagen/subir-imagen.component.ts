import { Component } from '@angular/core';

@Component({
  selector: 'app-subir-imagen',
  templateUrl: './subir-imagen.component.html',
  styleUrls: ['./subir-imagen.component.css']
})
export class SubirImagenComponent {
  imagenSeleccionada: string = '';

  subirImagen() {
    // Lógica para subir la imagen al artículo
    // Puedes usar un servicio para llamar a la API y realizar la subida de la imagen
  }

  seleccionarImagen(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e: any) => {
      this.imagenSeleccionada = e.target.result;
    };

    reader.readAsDataURL(file);
  }
}
