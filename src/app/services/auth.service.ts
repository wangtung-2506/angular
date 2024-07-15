import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject(HttpClient);
  constructor() { }

  signup(user: { email: string, password: string, confirmPassword: string }): Observable<any> {
    return this.http.post<any>('http://localhost:3000/signup', user);
  }
  signin(user: { email: string, password: string}): Observable<any> {
    return this.http.post<any>('http://localhost:3000/signin', user);
  }
}