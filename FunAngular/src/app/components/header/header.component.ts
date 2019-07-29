import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {

  constructor(
    private router: Router,
    private userService: UserService,
    private toastrService: ToastrService) { }

  isAdmin: boolean;
  isLogedIn: boolean;

  ngOnInit() {  }

  ngDoCheck(){
    this.isLogedIn = this.userService.isLogIn();
    if(this.isLogedIn){
      this.isAdmin = this.userService.isAdmin();
    }
  }


  onLogin(){
    this.isLogedIn = this.userService.isLogIn();
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
    this.toastrService.success('Logout successfully');
  }
}
