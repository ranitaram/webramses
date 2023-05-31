import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogService } from 'src/app/services/blog.service';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import { NgZone } from '@angular/core';

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
const day = currentDate.getDate().toString().padStart(2, '0');
@Component({
  selector: 'app-crear-articulo',
  templateUrl: './crear-articulo.component.html',
  styleUrls: ['./crear-articulo.component.css']
})
export class CrearArticuloComponent {

  

//para saber cuando el formulario se envio o no
public formSubmitted = false;
crearArticuloForm: FormGroup;

constructor(private fb: FormBuilder, 
            private blogService: BlogService, 
            private router: Router,
            private ngZone: NgZone,
            ){
                this.crearArticuloForm = this.fb.group({
                  titulo:  ['', Validators.required],
                  contenido: ['', Validators.required],
                  categoria: ['', Validators.required],
                  fecha: [`${year}-${month}-${day}`, Validators.required]
                });
    }

    

restForm(){
  this.crearArticuloForm.reset({
    titulo:'',
    contenido:'',
    categoria:'',
    fecha: `${year}-${month}-${day}`
  });
}


crearArticulo() {
  this.blogService.crearArticulo(this.crearArticuloForm.value)
  .subscribe({
    next: resp => {
      console.log(resp);
     this.restForm();
     Swal.fire('Artículo creado exitosamente!',
     'Da click en el boton!',
     'success'
     );
     this.ngZone.run(()=>{
      this.router.navigate(['/blog']);

    });
    },
    error: err => {
      console.log(err);
      this.restForm();
      Swal.fire('Error, faltan datos', err.error.msg, 'error');
    }
  })
}



}
