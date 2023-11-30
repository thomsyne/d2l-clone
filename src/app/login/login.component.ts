import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  displayPass: boolean = false;

  constructor(
    private readonly router: Router
  ) {}

  ngOnInit() {
  }

  displayPassword(){
    this.displayPass = !this.displayPass;
  }

  login(){
    
  }

  signUp(){
    this.router.navigate(['/sign-up']);
  }

}
