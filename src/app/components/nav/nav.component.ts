import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common'; 
import { LoginService } from '../../services/login/login.service';
import { Observable } from 'rxjs'; // Importa Observable para manejar observables

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit{
  userLoginOn$: Observable<boolean>; // Declara como Observable
  userRole$: Observable<string | null>;

  constructor(private loginService: LoginService, private router: Router, private cdRef: ChangeDetectorRef) {
        // Inicializa las propiedades después de la inyección
        this.userLoginOn$ = this.loginService.userLoginOn$;
        this.userRole$ = this.loginService.userRole$;
  }

  ngOnInit() {
  }

  logout(): void {
    this.loginService.logout().subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error("Error al cerrar sesión", err);
        this.loginService.clearSession();
        this.router.navigate(['/login']);
      }
    });
  }
}