import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { ListarArticulos } from 'src/app/interfaces/listar-articulos.interface';
import { BlogService } from 'src/app/services/blog.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-config-articulo',
  templateUrl: './config-articulo.component.html',
  styleUrls: ['./config-articulo.component.css']
})
export class ConfigArticuloComponent implements OnInit{

  articulos: ListarArticulos[] = [];

  constructor(private blogService: BlogService){}

  ngOnInit(): void {
    this.blogService.listFullarticle().pipe(
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

  eliminarArticulo(articuloId: string): void {
    this.blogService.borrarArticulo(articuloId).subscribe({
      next: (data) => {
        // Lógica adicional en caso de éxito si es necesario
        console.log('Artículo eliminado:', data);
        // Realizar alguna acción después de eliminar el artículo, si es necesario
        Swal.fire('Artículo se ha eliminado!', 'Da click en el boton!', 'success').then(() => {
          location.reload(); // Recargar la página
        });
      },
      error: (error) => {
        console.log('Error al eliminar el artículo:', error);
        // Manejo de error
        Swal.fire('Error, Error al eliminar el artículo', error.error.msg, 'error');
      }
    });
  }
  
  

}
