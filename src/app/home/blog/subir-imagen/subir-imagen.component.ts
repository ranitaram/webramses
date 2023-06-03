import { Component, Input, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-subir-imagen',
  templateUrl: './subir-imagen.component.html',
  styleUrls: ['./subir-imagen.component.css']
})
export class SubirImagenComponent implements OnInit {
  imagenSeleccionada: string = '';
  articuloId: string = '';

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerArticuloId();
  }

  obtenerArticuloId(): void {
    this.route.params.subscribe(params => {
      this.articuloId = params['id'];
    });
  }

  subirImagen(archivo: File) {
    this.blogService.subirImagen(this.articuloId, archivo).subscribe({
      next: (data) => {
        // La imagen se subió correctamente
        console.log('Imagen subida:', data);
        // Puedes mostrar una notificación de éxito usando una librería como SweetAlert2
        Swal.fire('Éxito', 'La imagen se ha subido correctamente', 'success');
        // Puedes realizar alguna acción adicional después de subir la imagen
        this.router.navigate(['/blog']);
      },
      error: (error) => {
        console.log('Error al subir la imagen:', error);
        // Puedes mostrar una notificación de error
        Swal.fire('Error', 'Hubo un error al subir la imagen', 'error');
      }
    });
  }

  seleccionarImagen(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e: any) => {
      this.imagenSeleccionada = e.target.result;
    };

    reader.readAsDataURL(file);
  }

  subirImagenSeleccionada() {
    if (this.imagenSeleccionada) {
      const archivo = this.convertirImagenAFile(this.imagenSeleccionada);
      this.subirImagen(archivo);
    } else {
      // Mostrar mensaje de que no se ha seleccionado ninguna imagen
    }
  }

  convertirImagenAFile(imagenSeleccionada: string): File {
    const base64Data = imagenSeleccionada.split(',')[1];
    const mimeType = imagenSeleccionada.split(';')[0].split(':')[1];
    const nombreArchivo = 'imagen.' + mimeType.split('/')[1];
    const byteCharacters = atob(base64Data);
    const byteNumbers = new Array(byteCharacters.length);
  
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
  
    const byteArray = new Uint8Array(byteNumbers);
  
    return new File([byteArray], nombreArchivo, { type: mimeType });
  }
}
