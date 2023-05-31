import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogService } from 'src/app/services/blog.service';


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
            ){
                this.crearArticuloForm = this.fb.group({
                  titulo:  ['', Validators.required],
                  contenido: ['', Validators.required],
                  categoria: ['', Validators.required],
                  fecha: [new Date(), Validators.required]
                });
    }




saveArticle() {
throw new Error('Method not implemented.');
}



}
