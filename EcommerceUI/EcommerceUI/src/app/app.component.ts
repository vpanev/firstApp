import { AuthenticationService } from './shared/services/authentication.service';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'EcommerceUI';

  public isUserAuthenticated: boolean;

  constructor(private _authService: AuthenticationService, private _router: Router, private toastr: ToastrService) {
    this._authService.authChanged.subscribe(res => {
      this.isUserAuthenticated = res;
    })
  }
  ngOnInit(): void {
    if (this._authService.isUserAuthenticated())
      this._authService.sendAuthStateChangeNotification(true);
  }

  logOut() {
    if (confirm("Are you sure you want to log out?")) {
      this.toastr.info("You have logged out!")
      this._authService.logout();
    }
  }
}
