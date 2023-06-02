import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { ListarArticulos } from 'src/app/interfaces/listar-articulos.interface';
import { BlogService } from 'src/app/services/blog.service';
import { ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit, AfterViewInit {
  idArticulo: string = '';
  articulo: ListarArticulos | null = null;
  baseImageUrl = 'http://127.0.0.1:4201/api/articulos/imagen/';
  defaultImageUrl: string = "/assets/img/default.png";
  articulos: ListarArticulos[] = [];
  almacenarArticulos: ListarArticulos[] = [];
  currentPage = 1;
  itemsPerPage = 10; // Número de artículos por página
  totalItems = 0; // Número total de artículos en la lista
  articulosCargados: ListarArticulos[] = [];

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private elRef: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idArticulo = params['id'];

      // Llamar a la función del servicio para obtener el artículo por el id
      this.obtenerArticulo();
    });

    this.blogService
      .listarArticulos()
      .pipe(
        tap((response: any) => {
          this.articulos = response.articulos;
          this.totalItems = this.articulos.length;
          this.almacenarArticulos = this.articulos.slice(0, this.itemsPerPage); // Cargar los primeros 10 artículos
          console.log(this.articulos);
        })
      )
      .subscribe({
        next: (data) => {
          // Lógica adicional en caso de éxito si es necesario
        },
        error: (error) => {
          console.log(error);
          // Manejo de error
        }
      });
  }

  ngAfterViewInit(): void {
    this.blogService.listarTodosLosArticulos(this.itemsPerPage).pipe(
      tap((response: any) => {
        this.articulos = response.articulos;
        this.totalItems = this.articulos.length;
        console.log(this.articulos);
        this.articulosCargados = this.articulos.slice(0, this.itemsPerPage); // Cargar los primeros artículos al iniciar la vista
        this.loadMoreArticulos();
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
  

  obtenerArticulo(): void {
    this.blogService.obtenerUnArticulo(this.idArticulo).subscribe({
      next: (response: any) => {
        this.articulo = response.articulo;
        console.log(this.articulo);
      },
      error: (error) => {
        console.log('Error al obtener el artículo:', error);
      }
    });
  }

  stripHtmlTags(content: string): string {
    const div = document.createElement('div');
    div.innerHTML = content;
    return div.textContent || div.innerText || '';
  }

  splitIntoParagraphs(texto: string): string[] {
    return texto.split('\n');
  }

  truncateContent(content: string): string {
    const words = content.split(' ');
    const truncatedWords = words.slice(0, 28);
    const truncatedContent = truncatedWords.join(' ');
    return truncatedContent;
  }

  // Desplazamiento a la parte superior
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  loadMoreArticulos() {
    const startIndex = this.currentPage * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
  
    if (startIndex < this.articulos.length) {
      const nuevosArticulos = this.articulos.slice(startIndex, endIndex);
      this.articulosCargados = [...this.articulosCargados, ...nuevosArticulos];
      console.log('Nuevos artículos cargados:', nuevosArticulos);
    } else {
      console.log('No hay más artículos para cargar');
    }
  
    this.currentPage++;

  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const windowHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop =
      window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollHeight - scrollTop <= windowHeight) {
      this.loadMoreArticulos();
    }
  }
}
