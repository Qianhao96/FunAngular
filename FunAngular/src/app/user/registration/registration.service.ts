import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class RegistrationService {

	constructor(private http: HttpClient) { }

	test = {
		"Email": "qianhao.liu@gmail.com",
	};
	validateEmailUrl = 'http://localhost:59372/api/ApplicationUser/unique'
	registerUrl = 'http://localhost:59372/api/ApplicationUser/Register'

	validateEmail() {
		return this.http.post(this.validateEmailUrl, this.test);
	}

	register(body) {
		return this.http.post(this.registerUrl, body);
	}

}
