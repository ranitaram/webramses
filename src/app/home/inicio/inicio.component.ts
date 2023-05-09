import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  contactForm: FormGroup | undefined;
  
  constructor(private fb: FormBuilder, private http: HttpClient){
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    const url = '/'; // La URL del sitio web de Netlify
    const formData = new FormData();

    Object.keys(this.contactForm!.controls).forEach(key => {
      formData.append(key, this.contactForm!.controls[key].value);
    });

    this.http.post(url, formData).subscribe(() => {
      console.log('Form submitted successfully');
      this.contactForm!.reset();
    }, (error) => {
      console.log('Form submission failed:', error);
    });
  }
 
  
}
