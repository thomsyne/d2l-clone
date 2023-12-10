import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  displayPass: boolean = false;
  loginForm!: FormGroup;

  constructor(
    private readonly router: Router,
    private toastr: ToastrService,
    private httpService: HttpService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm(){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  displayPassword(){
    this.displayPass = !this.displayPass;
  }

  login(){

    if(!this.loginForm?.valid){
      this.toastr.error('Please fill in all the fields.');
      return;
    }

    this.spinner.show()

    let payload = this.loginForm?.value;

    this.httpService.authSignIn(payload).subscribe(
      (res) => {
        if (res.email == payload.email ){
          this.spinner.hide();
          localStorage.setItem('res', JSON.stringify(res));
          this.toastr.success('Welcome back! Please check your email for an OTP.');
          this.router.navigate(['/otp']);
        }
      },
      (err) => {
        this.spinner.hide()
        this.toastr.error(err.error.message);
      }
    );
  }

  signUp(){
    this.router.navigate(['/sign-up']);
  }

}
