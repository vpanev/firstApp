import { Router } from '@angular/router';
import { UserForRegistrationDto } from './../../shared/_interfaces/user/userForRegistrationDto';
import { AuthenticationService } from './../../shared/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',

  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  public registerForm: FormGroup;
  public errorMessage: string = '';
  public showError: boolean;


  constructor(private _authService: AuthenticationService, private toastr: ToastrService, private _router: Router) { }

  validPasswords: boolean = false;

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirm: new FormControl('', [Validators.required]),
    })
  }

  public validateControl = (controlName: string) => {
    return this.registerForm.controls[controlName].invalid && this.registerForm.controls[controlName].touched;
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.registerForm.controls[controlName].hasError(errorName);
  }
  public validatePasswords(form: FormGroup) {
    if (form.controls['password'].value === form.controls['confirm'].value ? null : { 'mismatch': true }) {
      this.validPasswords = true;
      return true;
    }
    else {
      this.validPasswords = false;
      return false;
    }
  }

  public registerUser = (registerFormValue) => {
    this.showError = false;
    const formValues = { ...registerFormValue };

    const user: UserForRegistrationDto = {
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      username: formValues.username,
      email: formValues.email,
      password: formValues.password,
      confirmPassword: formValues.confirm
    };
    this._authService.registerUser("api/accounts/registration", user).subscribe(res => {
      this.registerForm.reset();
      this.toastr.success("Successful registration!")
      this._router.navigate(["/login"])
    },
      error => {
        this.errorMessage = error;
        this.showError = true;
      })
  }

}
