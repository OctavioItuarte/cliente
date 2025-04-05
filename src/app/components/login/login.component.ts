import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  email: string = "";
  password: string = "";

  constructor(private authService: LoginService) {}
/*
  login() {
    this.authService.login(this.email, this.password).subscribe(
      response => console.log("Login exitoso", response),
      error => console.error("Error al iniciar sesión", error)
    );
  }
*/
  login() {
    this.authService.login(this.email, this.password).subscribe(
      response => {
        console.log("✅ Login exitoso", response);

        // 👇 Confirmar que la sesión quedó activa
        this.authService.checkSession().subscribe(
          session => console.log("🙌 Sesión confirmada:", session),
          error => console.error("🚫 No se pudo confirmar sesión:", error)
        );
      },
      error => console.error("❌ Error al iniciar sesión", error)
    );
  }

}