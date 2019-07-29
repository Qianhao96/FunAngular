import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  

  isAdmin(){
    var payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    return (payLoad.role == "Admin") ? true : false;
  }

  isLogIn(){
    return (localStorage.getItem('token')) != null ? true : false
  }
}
