import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private toastrService: ToastrService, private service: HomeService) { }

  userDetails;

  ngOnInit() {
    this.service.getUserProfile().subscribe(
      res => { this.userDetails = res },
      err => {
        console.log(err);
      }
    )

  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
    this.toastrService.success('Logout successfully');
  }

}
