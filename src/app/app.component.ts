import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';
import { LoginService } from './services/login/login.service';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [CommonModule, RouterModule, FormsModule, NavComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'cliente';
  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.loginService.checkSession().subscribe; 
  }
}
