import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { OtpComponent } from './otp/otp.component';

const routes: Routes = [
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'otp',
    component: OtpComponent
  },
  {
    path: '**',
    component: LoginComponent
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
