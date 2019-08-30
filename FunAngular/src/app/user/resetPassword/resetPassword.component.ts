import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { resetPasswordService } from './resetPassword.service';

@Component({
	selector: 'app-resetPassword',
	templateUrl: './resetPassword.component.html',
	styleUrls: ['./resetPassword.component.css']
})
export class ResetPasswordComponent implements OnInit {

	constructor(public service: resetPasswordService,
		private router: Router,
		private toastrService: ToastrService) { }

	ngOnInit() {
	}

	resetPasswordForm = new FormGroup({
		matchPassword: new FormGroup({
			password: new FormControl('', [
				Validators.required
			]),
			confirmPassword: new FormControl('', Validators.required)
		}, { validators: this.comparePasswords })
	});

	comparePasswords(form: FormGroup) {
		let password = form.get('password');
		let confirmPs = form.get('confirmPassword');

		if (password.value != confirmPs.value) {
			confirmPs.setErrors({ passwordMissmatch: 'Password is not match' })
			return null
		}
	}

	get password() {
		return this.resetPasswordForm.get('matchPassword.password');
	}

	get confirmPassword() {
		return this.resetPasswordForm.get('matchPassword.confirmPassword');
	}

	onSubmit() {
		let body = {
			Password: this.resetPasswordForm.value.matchPassword.password
		}
		this.service.resetPasswrod(body).subscribe(
			(res: any) => {
				console.log(res);
				if (res.succeeded) {
					this.toastrService.success('Successfull!!!');
					this.router.navigate(['/user/login']);
				}
				else
					this.toastrService.warning(res.errors[0].description);
			},
			err => {
				console.log(err);
			}
		);
	}

}
