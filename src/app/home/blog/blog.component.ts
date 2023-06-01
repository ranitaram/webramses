import { Component, OnInit } from '@angular/core';
import { error } from 'jquery';
import { ListarArticulos } from 'src/app/interfaces/listar-articulos.interface';
import { BlogService } from 'src/app/services/blog.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  
  articulos: ListarArticulos[] = [];
  imageUrl: string = "/assets/img/mongo-logo.png"; // Ruta de la imagen
  imageUrl2: string = "/assets/img/git.jpg"; // Ruta de la imagen

  constructor(private blogService: BlogService){}
  
  ngOnInit(): void {
    this.blogService.listarArticulos().pipe(
      tap((articulos: ListarArticulos[]) => {
        this.articulos = articulos;
        console.log(articulos);
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
  return date.getDate().toString();
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

  
}
