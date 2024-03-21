import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url: string = 'http://localhost:8000/api';

  constructor(private http: HttpClient, private router: Router) {}

  public sign(payload: { email: string; password: string }): Observable<any> {
    return this.http.post<{ token: string }>(`${this.url}/login`, payload).pipe(
      map((res) => {
        localStorage.removeItem('token');
        localStorage.setItem('token', res.token);
      }),
      catchError((e) => {
        if (e.error.message) return throwError(() => e.error.message);

        return throwError(
          () =>
            'No momento não estamos conseguido validar este dados, tente novamente mais tarde!'
        );
      })
    );
  }
}
