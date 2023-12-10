import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { first } from "rxjs";
import { Days, Months, Years } from "src/helpers/constants";
import { HttpService } from "src/services/http.service";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"],
})
export class SignUpComponent implements OnInit {
  years = Years;

  months = Months;

  days = Days;

  signUpForm!: FormGroup;
  displayPass: boolean = false;

  uploadMessage: string = "";
  filename: string = "";
  imageUrl: string = "";

  constructor(
    private readonly router: Router,
    private toastr: ToastrService,
    private httpService: HttpService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  displayPassword() {
    this.displayPass = !this.displayPass;
  }

  buildForm() {
    this.signUpForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      year: new FormControl("", [Validators.required]),
      month: new FormControl("", [Validators.required]),
      day: new FormControl("", [Validators.required]),
      full_name: new FormControl("", [Validators.required]),
      image: new FormControl(""),
      image_url: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
    });
  }

  signUp() {

    if (this.signUpForm.invalid) {
      this.toastr.error("Please fill in all the required fields");
      return;
    }

    this.spinner.show();

    let payload = {
      email: this.signUpForm.value.email,
      dob:
        this.signUpForm.value.year +
        "-" +
        this.signUpForm.value.month +
        "-" +
        this.signUpForm.value.day,
      full_name: this.signUpForm.value.full_name,
      image_url: this.signUpForm.value.image_url,
      password: this.signUpForm.value.password,
      roles: ["user", "moderator"],
    };

    this.httpService.authSignup(payload).subscribe(
      (res) => {
        this.spinner.hide();
        if (res.message == "User was registered successfully!") {
          this.toastr.success(res.message);
          this.router.navigate(["/login"]);
        }
      },
      (err) => {
        this.spinner.hide();
        this.toastr.error(err.error.message);
      }
    );
  }

  processFile(event: any) {
    console.log(event)
    this.spinner.show();
    if (event.target.files[0].size > 1048576) {
      this.uploadMessage = `${event.target.files[0].name} cannot be uploaded because it is too large,file should be less than or equals 1mb`;
      this.spinner.hide();
    } else {
      const formData: FormData = new FormData();
      this.filename = event.target.files[0].name;
      formData.append("file", event.target.files[0], this.filename);
      this.httpService
        .uploadImage(formData)
        .pipe(first())
        .subscribe(
          (res) => {
            if (res.message == "Upload was successful") {
              this.uploadMessage = `${this.filename} was successfully uploaded.`;
              this.toastr.success(this.uploadMessage);
              this.imageUrl = res.data;
              this.signUpForm.patchValue({
                image_url: this.imageUrl
              })
              this.spinner.hide();
            } else {
              this.toastr.error(res.message);
              this.uploadMessage = `${this.filename} could not be uploaded.`;
              this.spinner.hide();
            }
          },
          (err) => {
            this.uploadMessage = err.error.message;
            this.spinner.hide();
          }
        );
    }
  }
}
