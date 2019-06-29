import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationValidators } from './registration.validators';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  //inject the desired service, can be as many as you want
  constructor(public service: RegistrationService) { }


  //put code where you want to excute when the page is loaded
  ngOnInit() {
  }

  //could use form builder to simpler the code 
  registrationForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      RegistrationValidators.cannotContainSpace,
    ]),
    email: new FormControl('', [
      Validators.email,
      Validators.required
    ]),
    matchPassword: new FormGroup({
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

  //use this can let the html became less mass
  get name() {
    return this.registrationForm.get('name');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get password() {
    return this.registrationForm.get('matchPassword.password');
  }

  get confirmPassword() {
    return this.registrationForm.get('matchPassword.confirmPassword');
  }

  test() {
    this.service.validateEmail().subscribe(
      res => {
        console.log(res);
      }
    )
  }

  onSubmit() {
    let body = {
      UserName: this.registrationForm.value.name,
      Email: this.registrationForm.value.email,
      Password: this.registrationForm.value.matchPassword.password
    }
    this.service.register(body).subscribe(
      (res: any) => {
        console.log(res)
        if (res.succeeded) {
          this.registrationForm.reset();
        }
      },
      err => {
        console.log(err);
      }
    );
  }

}
