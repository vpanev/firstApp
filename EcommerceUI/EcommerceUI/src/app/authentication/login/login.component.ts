import { HttpHeaders } from '@angular/common/http';
import { LoginRequestModel } from './../../shared/_interfaces/user/loginRequestModel';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from './../../shared/services/authentication.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public errorMessage: string = '';
  public showError: boolean;
  private _returnUrl: string;
  constructor(private _authService: AuthenticationService, private _router: Router, private _route: ActivatedRoute, private toastr: ToastrService) { }
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    })
    this._returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/clothes';
  }
  public validateControl = (controlName: string) => {
    return this.loginForm.controls[controlName].invalid && this.loginForm.controls[controlName].touched
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName)
  }
  public loginUser = (loginFormValue) => {
    this.showError = false;
    const login = { ...loginFormValue };
    const userForAuth: LoginRequestModel = {
      username: login.username,
      password: login.password
    }
    this._authService.loginUser('api/accounts/login', userForAuth,)
      .subscribe((res: any) => {
        localStorage.setItem("token", res.token);
        this._authService.sendAuthStateChangeNotification(res.isAuthSuccessful)
        this._router.navigate([this._returnUrl]);
        this.toastr.success("You have logged in")
      },
        (error) => {
          this.errorMessage = error;
          this.showError = true;
        })
  }


}
