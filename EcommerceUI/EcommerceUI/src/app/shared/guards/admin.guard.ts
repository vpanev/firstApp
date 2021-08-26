import { AuthenticationService } from './../services/authentication.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private _authService: AuthenticationService, private _router: Router) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this._authService.isUserAdmin()) {
      return true;
    }
    else {
      this._router.navigate(['/forbidden'], { queryParams: { returnUrl: state.url } });
      return false;
    }
  }

}
