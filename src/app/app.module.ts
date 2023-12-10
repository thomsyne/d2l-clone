import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OtpComponent } from './otp/otp.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [				
    AppComponent,
      SignUpComponent,
      LoginComponent,
      LandingComponent,
      OtpComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    RouterModule,
    BrowserAnimationsModule, // required animations module
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    ToastrModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
