import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = '/v1/auth/login';
  private otpUrl = '/v1/auth/twoFactorValidate'
  constructor(private http: HttpClient) { }
  isAuthenticated() {
    return !!sessionStorage.getItem('currentUser');
  }

  login(username: string, password: string) {
    const body = {
      username,
      password
    }
    return this.http.post<{user: string}>(this.url, body);
  }

  twoFactorValidators(username: string, otpCode: string) {
    const body = {
      username,
      otpCode
    }
    return this.http.post(this.otpUrl, body);
  }
}
