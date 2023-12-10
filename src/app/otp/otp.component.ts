import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/services/http.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {

  displayPass: boolean = false;
  otp: any = "";
  userInfo!: any;

  constructor(
    private readonly router: Router,
    private toastr: ToastrService,
    private httpService: HttpService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.userInfo = JSON.parse(localStorage.getItem('res')!);

    if (!this.userInfo){
      this.toastr.warning('You are not logged in. Please login to continue.');
      this.router.navigate(['/']);
    }
  }

  displayPassword(){
    this.displayPass = !this.displayPass;
  }

  login(){

    this.spinner.show();

    let payload = {
      otp_code: Number(this.otp),
      user_id: this.userInfo.user_id
    }

    this.httpService.authOtp(payload).subscribe(
      (res) => {
        if (res.message == 'Login Successful!' ){
          this.spinner.hide();
          this.toastr.success('Login Successful!');
          this.router.navigate(['/landing']);
        }
      },
      (err) => {
        this.spinner.hide();
        console.log(err);
        this.toastr.error(err.error.message);
      }
    );
  }

  back(){
    this.router.navigate(['/']);
  }

  signUp(){
    this.router.navigate(['/sign-up']);
  }

}
