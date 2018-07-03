import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../service/auth-service.service';

@Component({
  selector: 'app-modpwd',
  templateUrl: './modpwd.component.html',
  styleUrls: ['./modpwd.component.css']
})
export class ModpwdComponent implements OnInit {

  private resetpwd;
  private confresetpwd;
  public message = '';
  public img = '';
  private id;
  constructor(private route: ActivatedRoute, private rest: AuthService, private router: Router) { }


  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.id = +params.get('id');
      });
  }

  reinitialiser_pwd(a: string, b: string) {
    if (a === b) {
      this.rest.pwdrest(this.id, a).subscribe(
        data => {
          console.log('le status est :' + data.status);
          if (data.status === 1) {
            console.log('le nouveau mot de passe est ' + a);
            this.message = 'Votre nouveau mot de passe est ' + a + ' avec l\'id ' + this.id;
            this.img = 'assets/image/icons8-checked.svg';
          } else {
            console.log('returning false');
            this.img = 'assets/image/icons8-cancel.svg';
          }
        });
    } else {
      this.img = 'assets/image/icons8-cancel.svg';
    }
  }

}
