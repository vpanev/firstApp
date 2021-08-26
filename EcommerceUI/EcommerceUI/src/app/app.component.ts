import { AuthenticationService } from './shared/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//TODO: Later transfer the menu to multiple components
export class AppComponent implements OnInit {
  title = 'EcommerceUI';
  public isUserAuthenticated: boolean;
  constructor(private _authService: AuthenticationService, private _router: Router, private toastr: ToastrService) {
    this._authService.authChanged
      .subscribe(res => {
        this.isUserAuthenticated = res;
      })
  }
  ngOnInit(): void {
    if (this._authService.isUserAuthenticated())
      this._authService.sendAuthStateChangeNotification(true);


  }
  public logOut = () => {
    if (confirm("Are you sure you want to log out?")) {
      this.toastr.info("You have logged out!")
      this._authService.logout();
      this._router.navigate(["/login"]);
    }
  }
  isUserAdmin() {
    return this._authService.isUserAdmin();
  }
}
