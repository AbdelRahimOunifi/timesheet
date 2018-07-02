import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { EditComponent } from './component/edit/edit.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthServiceService } from './service/auth-service.service';
import { ResetpwdComponent } from './component/resetpwd/resetpwd.component';

const appRoutes: Routes = [
  { path: 'resetpwd', component: ResetpwdComponent },
  { path: 'login', component: LoginComponent },
  { path: 'edit', component: EditComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EditComponent,
    ResetpwdComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
