import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   //para saber cuando el formulario se envio o no
   public formSubmitted = false;
   loginForm: FormGroup;
   
 
   constructor(private fb: FormBuilder,
    private usuarioService: UsuarioService){
      this.loginForm = this.fb.group({
    
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        recordar: [false]
       
      });
    }


    login(){
      this.usuarioService.login(this.loginForm.value)
      .subscribe(
        {
          next: resp => {
            console.log(resp);
          },
          error: err => {
            Swal.fire('Error', err.error.msg, 'error')
          }
        }
      )
    }
}
