import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials) {
    return this.http.post(`http://localhost:8000/api/managers/authenticate/`, {...credentials});
  }
}
