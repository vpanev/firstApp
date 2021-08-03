

import { UserForRegistrationDto } from './../_interfaces/user/userForRegistrationDto';
import { RegistrationResponseDto } from './../_interfaces/response/registrationResponseDto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  //TODO refactor url
  private readonly _envUrl = 'https://localhost:44315'
  constructor(private _http: HttpClient) { }

  public registerUser(route: string, body: UserForRegistrationDto) {
    //URL was wrong and got 404 status code, refactor later
    console.log(this.createCompleteRoute(route, this._envUrl));
    return this._http.post<RegistrationResponseDto>(this.createCompleteRoute(route, this._envUrl), body);
  }

  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`;
  }
}