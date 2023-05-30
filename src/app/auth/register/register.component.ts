import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2'

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
  },{
    validators: this.passwordsIguales('password', 'password2')
  });

  constructor(private fb: FormBuilder,
              private usuarioService: UsuarioService){}

  //metodo para capturar la informacion
  crearUsuario(){
    this.formSubmitted = true;
    console.log(this.registerForm.value);

    if (this.registerForm.invalid) {
      return;
    }
    //Si el formulario es valido realizar el posteo
    this.usuarioService.crearUsuario(this.registerForm.value)
    .subscribe(
      {
        next: resp => {
          console.log('usuario creado');
          console.log(resp);
        },
        error: err => {
          Swal.fire('Error', err.error.msg, 'error')
        }
      }
    );
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

  passwordsNoValidos(){
    const pass1 = this.registerForm.get('password')?.value;
    const pass2 = this.registerForm.get('password2')?.value;

    if ((pass1 !== pass2) && this.formSubmitted) {
      return true;
    }else {
      return false;
    }

  }

  //este es una funcion que regresa un objeto si da errores
  // si no da errores regresara un null
  passwordsIguales(pass1Name: string, pass2Name: string){
    //necesitamos retornar una funcion
    return(formGroup: FormGroup)=> {
      const pass1Control = formGroup.get(pass1Name);
      const pass2Control = formGroup.get(pass2Name);

      if (pass1Control?.value === pass2Control?.value) {
        pass2Control?.setErrors(null)
      } else {
        pass2Control?.setErrors({noEsIgual: true})
      }

    }
  }

}
