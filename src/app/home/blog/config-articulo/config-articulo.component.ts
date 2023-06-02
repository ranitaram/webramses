import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { ListarArticulos } from 'src/app/interfaces/listar-articulos.interface';
import { BlogService } from 'src/app/services/blog.service';


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

}
