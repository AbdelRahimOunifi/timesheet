import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetpwd',
  templateUrl: './resetpwd.component.html',
  styleUrls: ['./resetpwd.component.css']
})
export class ResetpwdComponent implements OnInit {
  private resetemail;
  constructor(private router: Router, private auth: AuthService ) { }

  ngOnInit() {
  }
  logconsol() {
    console.log(this.resetemail);
    this.auth.resetpwd(this.resetemail).subscribe(
      data => {
        console.log('le status est :' + data.jwt);
        if (data.status === 1) {
          this.router.navigate(['/login']);
        }
      });
    console.log(this.resetemail);
  }

}
