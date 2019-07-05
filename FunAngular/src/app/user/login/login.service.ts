import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginUrl = 'http://localhost:59372/api/ApplicationUser/Login'
  login(formData){
    return this.http.post(this.loginUrl, formData)
  }
}
