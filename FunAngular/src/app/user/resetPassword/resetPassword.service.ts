import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class resetPasswordService {

	constructor(private http: HttpClient) {}

	resetPasswordUrl = 'http://localhost:59372/api/ApplicationUser/resetPassword'

	resetPasswrod(body) {
		return this.http.post(this.resetPasswordUrl, body);
	}
}
