import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { EditComponent } from './component/edit/edit.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthService } from './service/auth-service.service';
import { ResetpwdComponent } from './component/resetpwd/resetpwd.component';
import { ModpwdComponent } from './component/modpwd/modpwd.component';
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';
import { AuthGuard } from './service/auth-guard.service';

const appRoutes: Routes = [
  { path: 'pwdmod/:id', component: ModpwdComponent },
  { path: 'resetpwd', component: ResetpwdComponent },
  { path: 'login', component: LoginComponent },
  { path: 'edit', component: EditComponent, canActivate : [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EditComponent,
    ResetpwdComponent,
    ModpwdComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('access_token');
      }}
    }) ,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService,
    JwtHelperService,
    AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
