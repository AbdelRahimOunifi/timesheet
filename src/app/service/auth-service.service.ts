import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Token } from '../tools/token.model';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private customersUrl = 'http://localhost:18080/timesheet-web/rest/login';
  private ResetUrl = 'http://localhost:18080/timesheet-web/rest/login/reset';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient
   , private helper: JwtHelperService
  ) { }
  // login fonction
  login(email, password): Observable<Token> {
    return this.http.post<Token>(this.customersUrl + '/' + email + '/' + password, '', );
  }
  // send reset password
  pwdrest(tokendb, password): Observable<Token> {
    return this.http.post<Token>(this.ResetUrl + '/' + tokendb + '/' + password, '', );
  }
  // http error handler function
  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || 'Server Error');
  }
  // reset password function
  resetpwd(email): Observable<Token> {
    console.log(this.customersUrl + '/' + email);
    return this.http.post<Token>(this.customersUrl + '/' + email, '', );
  }
  // logout fonction
  logout() {
    localStorage.removeItem('token');
  }
  // Login test (verification)
  isLoggedIn() {
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }
/*     const expdate = this.helper.getTokenExpirationDate(token);
    const isExpired = this.helper.isTokenExpired(token);
    if (isExpired) {
      localStorage.removeItem('token');
      return false;
    }
    return !isExpired; */
    return true;
  }
  // Login user information
  get CurrentUser() {
    const token = localStorage.getItem('token');
    if (!token) { return null; }
    return this.helper.decodeToken(token);
  }
}
