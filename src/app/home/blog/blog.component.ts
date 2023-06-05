import { Component, OnInit } from '@angular/core';
import { error } from 'jquery';
import { ListarArticulos } from 'src/app/interfaces/listar-articulos.interface';
import { BlogService } from 'src/app/services/blog.service';
import { tap } from 'rxjs/operators';
import { GLOBAL } from 'src/app/services/GLOBAL';

const baseUrl = GLOBAL.url;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  
  articulos: ListarArticulos[] = [];
  baseImageUrl = `${baseUrl}articulos/imagen/`;
  defaultImageUrl: string = "/assets/img/default.png"; // Ruta de la imagen
 

  constructor(private blogService: BlogService){}
  
  ngOnInit(): void {
    this.blogService.listarArticulos().pipe(
      tap((response: any) => {
        this.articulos = response.articulos;
       // this.imageUrl = response.artculo.imagen ? `/assets/img/${response.articulo.imagen}`: "/assets/img/default.png";
        console.log(this.articulos);
      })
    ).subscribe({
      next: (data) => {
        // Lógica adicional en caso de éxito si es necesario
      },
      error: (error) => {
        console.log(error);
        // Manejo de error
      }
    });
  }

  // Dentro de la clase del componente
  obtenerDia(fecha: string): string {
    const date = new Date(fecha);
    return date.getUTCDate().toLocaleString('en-US', { minimumIntegerDigits: 2 });
  }
  

obtenerMes(fecha: string): string {
  const date = new Date(fecha);
  const options: Intl.DateTimeFormatOptions = { month: 'short' };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

obtenerAnio(fecha: string): string {
  const date = new Date(fecha);
  return date.getFullYear().toString();
}

stripHtmlTags(content: string): string {
  const div = document.createElement('div');
  div.innerHTML = content;
  return div.textContent || div.innerText || '';
}


  
}
