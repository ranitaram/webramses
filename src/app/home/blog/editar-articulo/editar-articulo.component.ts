import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogService } from 'src/app/services/blog.service';
import Swal from 'sweetalert2';
import {Router, ActivatedRoute} from '@angular/router';
import { NgZone } from '@angular/core';
import { ListarArticulos } from 'src/app/interfaces/listar-articulos.interface';
import { CrearArticuloForm } from 'src/app/interfaces/crear-articulo-form.interface';

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
const day = currentDate.getDate().toString().padStart(2, '0');



@Component({
  selector: 'app-editar-articulo',
  templateUrl: './editar-articulo.component.html',
  styleUrls: ['./editar-articulo.component.css']
})
export class EditarArticuloComponent  implements OnInit{

  editarArticuloForm: FormGroup;
  articuloId: string = '';
  articulo: ListarArticulos = {
    _id: '',
  titulo: '',
  contenido: '',
  categoria: '',
  fecha: '',
  imagen: ''
  };

  


  constructor(private fb: FormBuilder, 
    private blogService: BlogService, 
    private router: Router,
    private ngZone: NgZone,
    private route: ActivatedRoute
    ){
    this.editarArticuloForm = this.fb.group({
      titulo:  ['', Validators.required],
      contenido: ['', Validators.required],
      categoria: ['', Validators.required],
      fecha: [`${year}-${month}-${day}`, Validators.required]
    })
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.articuloId = params['id'];
      this.obtenerArticulo();
     
    });
  }

  obtenerArticulo(): void {
    this.blogService.obtenerUnArticulo(this.articuloId).subscribe({
      next: (response: any) => {
        this.articulo = response.articulo;
        console.log(this.articulo);
        this.llenarCamposFormulario();
      },
      error: (error) => {
        console.log('Error al obtener el artículo:', error);
      }
    });
  }

  

  llenarCamposFormulario() {
    this.editarArticuloForm.patchValue({
      titulo: this.articulo.titulo,
      contenido: this.articulo.contenido,
      categoria: this.articulo.categoria,
      fecha: this.articulo.fecha ? this.articulo.fecha.substring(0, 10) : ''
    });
  }
  

  restForm(){
    this.editarArticuloForm.reset({
      titulo:'',
      contenido:'',
      categoria:'',
      fecha: `${year}-${month}-${day}`
    });
  }

  // editarArticulo(){
  //   const articuloActualizado: ListarArticulos = {
  //     _id: this.articulo._id,
  //     titulo: this.editarArticuloForm.value.titulo,
  //     contenido: this.editarArticuloForm.value.contenido,
  //     categoria: this.editarArticuloForm.value.categoria,
  //     fecha: this.editarArticuloForm.value.fecha,
  //     imagen: this.articulo.imagen
  //   };
  //   this.blogService.actualizarArticulo(articuloActualizado).subscribe(
  //     (data) => {
  //       // La actualización se realizó correctamente
  //       console.log('Artículo actualizado:', data);
  //       // Puedes mostrar una notificación de éxito usando una librería como SweetAlert2
  //       Swal.fire('Éxito', 'El artículo se ha actualizado correctamente', 'success');
  //       // Redirige al listado de artículos o a la página de detalles del artículo actualizado
  //       this.router.navigate(['/blog']);
  //     },
  //     (error) => {
  //       console.log('Error al actualizar el artículo:', error);
  //       // Puedes mostrar una notificación de error
  //       Swal.fire('Error', 'Hubo un error al actualizar el artículo', 'error');
  //     }
  //   );
  // }

  editarArticulo() {
    const articuloActualizado: CrearArticuloForm = {
      titulo: this.editarArticuloForm.value.titulo,
      contenido: this.editarArticuloForm.value.contenido,
      categoria: this.editarArticuloForm.value.categoria,
      fecha: this.editarArticuloForm.value.fecha
    };
  
    this.blogService.actualizarArticulo(this.articuloId, articuloActualizado).subscribe(
      () => {
        console.log('Artículo actualizado');
        Swal.fire('Éxito', 'El artículo se ha actualizado correctamente', 'success');
        this.router.navigate(['/blog']);
      },
      (error) => {
        console.log('Error al actualizar el artículo:', error);
        Swal.fire('Error', 'Hubo un error al actualizar el artículo', 'error');
      }
    );
  }
  
  

}
