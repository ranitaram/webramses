import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  //para saber cuando el formulario se envio o no
  public formSubmitted = false;

  public registerForm = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    password2: ['', Validators.required],
    terminos: [false, Validators.required],
  });

  constructor(private fb: FormBuilder){}

  //metodo para capturar la informacion
  crearUsuario(){
    this.formSubmitted = true;
    console.log(this.registerForm.value);

    if (this.registerForm.valid) {
      console.log('postenado formulario')
    }else {
      console.log('Formulario no es correcto....');
    }
  }

  campoNoValido(campo: string):boolean{
    if (this.registerForm.get(campo)?.invalid && this.formSubmitted) {
      return true;
    }else {
      return false;
    }
  }

  aceptarTerminos(){
    return !this.registerForm.get('terminos')?.value && this.formSubmitted;

  }

}
