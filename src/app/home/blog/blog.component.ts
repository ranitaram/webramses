import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  imageUrl: string = "/assets/img/mongo-logo.png"; // Ruta de la imagen
  imageUrl2: string = "/assets/img/git.jpg"; // Ruta de la imagen
}
