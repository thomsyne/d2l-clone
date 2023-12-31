import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'd2l-clone';
  displayPass: boolean = false;

  constructor(
    private readonly router: Router
  ) {}

  displayPassword(){
    this.displayPass = !this.displayPass;
  }

  login(){
    
  }

  signUp(){
    this.router.navigate(['/sign-up']);
  }
}
