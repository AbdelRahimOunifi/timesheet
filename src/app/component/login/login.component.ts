import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../service/auth-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private invalidlogin: boolean;
  constructor(private router: Router, private auth: AuthServiceService ) { }

  ngOnInit() {
  }
  signIn(a, b) {
    console.log( 'username a :' + a + ' password :' + b );
    const q = this.auth.login(a, b).subscribe(
      data => {
        console.log('le status est :' + data.jwt);
        if (data.status == 1) {
          this.router.navigate(['/edit']);
        } else {
          console.log('returning false');
          this.invalidlogin = true;
        }
      });
  }

}
