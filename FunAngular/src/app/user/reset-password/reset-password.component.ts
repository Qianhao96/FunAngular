import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
import { RegistrationValidators } from '../registration/registration.validators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, private toastrService: ToastrService) { }

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
    ]),
    matchPassword: new FormGroup({
      oldPassword: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        RegistrationValidators.passwordLength
      ]),
      confirmPassword: new FormControl('', Validators.required)
    }, { validators: this.comparePasswords })
  });

    //custome validator within the same file as where it is used 
    comparePasswords(form: FormGroup) {
      let password = form.get('password');
      let confirmPs = form.get('confirmPassword');
  
      if (password.value != confirmPs.value) {
        confirmPs.setErrors({ passwordMissmatch: 'Password is not match' })
        return null
      }
    }

  get userName() {
    return this.resetPasswordForm.get('userName');
  }

  get answer() {
    return this.resetPasswordForm.get('answer');
  }

  get oldPassword() {
    return this.resetPasswordForm.get('matchPassword.oldPassword');
  }

  get password() {
    return this.resetPasswordForm.get('matchPassword.password');
  }

  get confirmPassword() {
    return this.resetPasswordForm.get('matchPassword.confirmPassword');
  }

  Question;
  IncorrectAnswer;

  findUser(event: any) {
    let body = { Username: event.target.value }
    this.userService.getQuestion(body).subscribe(
      (res: any) => {
        console.log(res.question);
        this.Question = res.question;
      },
      err => {
        console.log(err.error);
        this.Question = null;
        this.toastrService.success(err.error);
      });
  }

  checkAnswer(){
    let body = {
      Username: this.resetPasswordForm.value.userName,
      Question: this.Question,
      Answer: this.resetPasswordForm.value.answer
    }
    this.userService.checkAnswer(body).subscribe(
      (res: any) => {
        console.log(res);
        this.IncorrectAnswer = false;
      },
      err => {
        console.log(err.error);
        this.IncorrectAnswer = true;
      });
  }

  changePassword(){
    let body = {
      Username: this.resetPasswordForm.value.userName,
      OldPassword: this.resetPasswordForm.value.matchPassword.oldPassword,
      NewPassword: this.resetPasswordForm.value.matchPassword.password
    }
    this.userService.changePassword(body).subscribe(
      (res: any) => {
        console.log(res);
        this.toastrService.success('You have successfully changed your password!');
        this.router.navigate(['/user/login']);
      },
      err => {
        console.log(err.error);
      });
  }

}
