import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/services/http.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  userInfo!: any;

  constructor(
    private readonly router: Router,
    private toastr: ToastrService,
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.userInfo = JSON.parse(localStorage.getItem('res')!);

    if (!this.userInfo){
      this.toastr.warning('You are not logged in. Please login to continue.');
      this.router.navigate(['/']);
    }
  }

}
