import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  

  isAdmin(){
    var payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    return (payLoad.role == "Admin") ? true : false;
  }

  isLogIn(){
    return (localStorage.getItem('token')) != null ? true : false
  }

  getUserSecurityQuetionURL = 'http://localhost:59372/api/ApplicationUser/Get-Question'
  getQuestion(userName){
    return this.http.post(this.getUserSecurityQuetionURL, userName);
  }


}
