import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [CommonModule, RouterModule, FormsModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'cliente';
}
