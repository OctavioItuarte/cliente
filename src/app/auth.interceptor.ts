import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login/login.service';
import { tap } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const loginService = inject(LoginService);

  return next(req).pipe(
    tap({
      next: () => {},
      error: (error) => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          const isLoginRoute = req.url.includes('/login');

          if (isLoginRoute) {
            // Error al intentar iniciar sesión
            alert('Email o contraseña incorrectos.');
          }
          else{
            // La sesión ha expirado
            console.log('Sesión expirada');
            alert('No hay una sesión activa. Por favor, inicia sesión.');
            loginService.clearSession();
            router.navigate(['/login']);
          }
        }
      }
    })
  );
};