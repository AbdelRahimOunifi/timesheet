import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Token } from '../tools/token.model';
import { Observable} from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private customersUrl = 'http://localhost:18080/timesheet-web/rest/login';
  private ResetUrl = 'http://localhost:18080/timesheet-web/rest/login';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }
  login(email , password): Observable<Token> {
    return this.http.post<Token>(this.customersUrl + '/' + email  + '/' + password,'',);
  }
  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || 'Server Error');
  }
  resetpwd(email): Observable<Token> {
    console.log(this.ResetUrl + '/' + email);

    return this.http.post<Token>(this.ResetUrl + '/' + email ,'',);
  }
}
