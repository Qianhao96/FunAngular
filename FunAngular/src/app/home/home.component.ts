import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from './home.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, 
    private toastrService: ToastrService, 
    private service: HomeService,
    private userService: UserService) { }

  userDetails;

  isAdmin;

  ngOnInit() {
    this.service.getUserProfile().subscribe(
      res => { this.userDetails = res },
      err => {
        console.log(err);
      }
    )

    this.isAdmin = this.userService.isAdmin();

    }
}
