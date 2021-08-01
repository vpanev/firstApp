import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  readonly loginUrl = "https://localhost:44315/identity/login";
  readonly registerUrl = "https://localhost:44315/identity/register";

  constructor(private http: HttpClient) { }

  login(data): Observable<any> {
    return this.http.post(this.loginUrl, data)
  }
  register(data): Observable<any> {
    return this.http.post(this.registerUrl, data)
  }

  saveToken(token) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
