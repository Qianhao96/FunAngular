import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor(public service: LoginService,
		private router: Router,
		private toastrService: ToastrService) { }

	ngOnInit() {
		if (localStorage.getItem('token') != null) {
			this.router.navigate(['/home']);
		}
	}

	loginForm = new FormGroup({
		email: new FormControl('', [
			Validators.required,
			Validators.email
		]),
		password: new FormControl('', [
			Validators.required
		])
	});

	get email() {
		return this.loginForm.get('email');
	}

	get password() {
		return this.loginForm.get('password');
	}

	onSubmit(form: NgForm) {
		this.service.login(form.value).subscribe(
			(res: any) => {
				localStorage.setItem('token', res.token);
				this.toastrService.success('Login Successful!!!');
				this.router.navigate(['/home'])
			},
			err => {
				if (err.status == 400)
					this.toastrService.error('Incorrect username or password');
				else
					console.log(err);
			}
		);
	}

}
