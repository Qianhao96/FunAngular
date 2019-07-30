import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private userService: UserService, private toastrService: ToastrService) { }

  ngOnInit() {
  }

  resetPasswordForm = new FormGroup({
    userName: new FormControl('', [
      Validators.required
    ]),
    question: new FormControl('', [
      Validators.required
    ]),
    answer: new FormControl('', [
      Validators.required
    ])
  });

  get userName() {
    return this.resetPasswordForm.get('userName');
  }

  Question;

  findUser(event: any) {
    let body = { Username: event.target.value }
    this.userService.getQuestion(body).subscribe(
      (res: any) => {
        console.log(res.question);
        this.Question = res.question;
      },
      err => {
        console.log(err.error);
        this.toastrService.success(err.error);
      });
  }

}
