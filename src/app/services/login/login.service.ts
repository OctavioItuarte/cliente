import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs'; // Importamos 'of' para devolver un observable vacío
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

const URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private userRoleSubject = new BehaviorSubject<string | null>(null);
  private userLoginOnSubject = new BehaviorSubject<boolean>(false);

  userRole$ = this.userRoleSubject.asObservable();
  userLoginOn$ = this.userLoginOnSubject.asObservable();

  constructor(private http: HttpClient,  private router: Router) {
    //this.checkSession(); // Verificar sesión al iniciar la app
  }

  login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(
      `${URL}/login/password`,
      { username: email, password },
      { headers, withCredentials: true }
    ).pipe(
      tap((response: any) => {
        if (response?.user?.role) {
          this.userRoleSubject.next(response.user.role);
          this.userLoginOnSubject.next(true);
          // Redirigir según el rol
          if (response.user.role === 'client') {
              this.router.navigate(['/business-list']);
          } else if (response.user.role === 'business') {
              this.router.navigate(['/create-products']);
              console.log("el id del negocio es: " + response.user.id);
          }
        }
      })
    );
  }

  logout(): Observable<any> {
    return this.http.post(`${URL}/logout`, {}, { withCredentials: true }).pipe(
      tap(() => {
        this.clearSession(); // Se limpia la sesión antes de redirigir
      })
    );
  }

  clearSession(): void {
    this.userRoleSubject.next(null);
    this.userLoginOnSubject.next(false);
  }

  checkSession(): Observable<{ user?: { role: string } } | null> {
    return this.http.get<{ user?: { role: string } }>(`${URL}/session`, { withCredentials: true })
      .pipe(
        catchError((err) => {
          if (err.status === 401) {
            this.clearSession();
          } else {
            console.error('Error al verificar sesión:', err);
          }
          return of(null);
        }),
        tap((response) => {
          if (response?.user?.role) {
            this.userRoleSubject.next(response.user.role);
            this.userLoginOnSubject.next(true);
          } else {
            this.clearSession();
          }
        })
      );
  }

  /*checkSession(): void {
    this.http.get<{ user?: { role: string } }>(`${URL}/session`, { withCredentials: true })
      .pipe(
        catchError((err) => {
          if (err.status === 401) {
            // No hay sesión activa, limpiamos los datos del usuario
            this.clearSession();
          } else {
            console.error('Error al verificar sesión:', err);
          }
          return of(null); // Evitamos que Angular intente procesar la respuesta como error
        })
      )
      .subscribe((response) => {
        if (response?.user?.role) {
          this.userRoleSubject.next(response.user.role);
          this.userLoginOnSubject.next(true);
        } else {
          this.clearSession();
        }
      });
  }*/
}