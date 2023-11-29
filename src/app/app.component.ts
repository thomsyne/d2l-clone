import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'd2l-clone';
  displayPass: boolean = false;

  constructor() {}

  displayPassword(){
    this.displayPass = !this.displayPass;
  }

  login(){
    
  }
}
