import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  Url = "http://localhost:59372/api/UserProfile"

  getUserProfile() {
    return this.http.get(this.Url)


    //Every api need the token to authenticate the user, or use (auth.interceptor)
    // var tokenHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
    // return this.http.get(this.Url, { headers: tokenHeader });
  }

}
