import { AuthResponseDto } from './../_interfaces/response/authResponseDto';
import { UserForAuthenticationDto } from './../_interfaces/user/userForAuthenticationDto ';


import { UserForRegistrationDto } from './../_interfaces/user/userForRegistrationDto';
import { RegistrationResponseDto } from './../_interfaces/response/registrationResponseDto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  //TODO refactor url
  private readonly _envUrl = 'https://localhost:44315'
  private _authChangeSub = new Subject<boolean>();
  public authChanged = this._authChangeSub.asObservable();
  constructor(private _http: HttpClient, private _jwtHelper: JwtHelperService) { }

  public registerUser(route: string, body: UserForRegistrationDto) {
    //URL was wrong and got 404 status code, refactor later
    console.log(this.createCompleteRoute(route, this._envUrl));
    return this._http.post<RegistrationResponseDto>(this.createCompleteRoute(route, this._envUrl), body);
  }

  public loginUser(route: string, body: UserForAuthenticationDto) {
    return this._http.post<AuthResponseDto>(this._envUrl + "/api/accounts/login", body);
  }

  public sendAuthStateChangeNotification = (isAuthenticated: boolean) => {
    this._authChangeSub.next(isAuthenticated);
  }
  public logout() {
    localStorage.removeItem("token")
    this.sendAuthStateChangeNotification(false)
  }

  public isUserAuthenticated(): boolean {
    const token = localStorage.getItem("token");
    return token && !this._jwtHelper.isTokenExpired(token);
  }

  public isUserAdmin = (): boolean => {
    const token = localStorage.getItem("token");
    const decodedToken = this._jwtHelper.decodeToken(token);
    const role = decodedToken

    return role === "Administrator"
  }

  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`;
  }
}