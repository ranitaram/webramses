import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

declare const google: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit{

  @ViewChild('googleBtn')
  googleBtn!: ElementRef;


   //para saber cuando el formulario se envio o no
   public formSubmitted = false;
   loginForm: FormGroup;
   
 
   constructor(private fb: FormBuilder,
    private usuarioService: UsuarioService){
      this.loginForm = this.fb.group({
    
        email: [localStorage.getItem('email') || '', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        recordar: [false]
       
      });
    }

    ngAfterViewInit(): void {
      this.googleInit();
    }

    googleInit(){
      google.accounts.id.initialize({
        client_id: "44276019668-9fcdqcd4gaenk3f1b5qkkk8e4a8376q4.apps.googleusercontent.com",
        callback: this.handleCredentialResponse
      });
      google.accounts.id.renderButton(
       // document.getElementById("buttonDiv"),
       this.googleBtn.nativeElement,
        { theme: "outline", size: "large" }  // customization attributes
      );
    }

    handleCredentialResponse(response: any){
      console.log("Encoded JWT ID token: " + response.credential);
    }

    login(){
      this.usuarioService.login(this.loginForm.value)
      .subscribe(
        {
          next: resp => {
            if (this.loginForm.get('recordar')?.value){
             localStorage.setItem('email', this.loginForm.get('email')?.value)
            }else {
              localStorage.removeItem('email');
            }
          },
          error: err => {
            Swal.fire('Error', err.error.msg, 'error')
          }
        }
      )
    }
}
