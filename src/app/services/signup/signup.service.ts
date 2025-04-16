import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';


const URL="http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  signup(path: string, user:any){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${URL}/${path}`, user, {headers, withCredentials:true}).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      console.error('Error del cliente:', error.error.message);
    } else {
      // Error del lado del servidor
      console.error(`Error del servidor (${error.status}):`, error.error);
    }

    // Retornar un observable con un mensaje de error amigable
    return throwError(() => new Error('Ocurrió un error. Este usuario ya existe.'));
  }
}
