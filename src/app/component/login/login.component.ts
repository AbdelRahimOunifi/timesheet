import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService } from '../../service/auth-service.service';
import { JwtModule } from '@auth0/angular-jwt';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private invalidlogin: boolean;
  constructor(private router: Router, private auth: AuthService ) { }

  ngOnInit() {
  }
  // Login fonction
  signIn(a, b) {
    console.log( 'username a :' + a + ' password :' + b );
    const q = this.auth.login(a, b).subscribe(
      data => {
        console.log('le status est :' + data.jwt);
        if (data.status === 1) {
          localStorage.setItem('token', data.jwt);
          this.router.navigate(['/edit']);
        } else {
          console.log('returning false');
          this.invalidlogin = true;
        }
      });
  }

}
