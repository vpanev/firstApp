import { AuthenticationService } from './../shared/services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.loadUsers()
  }

  list: any[] = []
  loadUsers() {
    this.authService.getUsers().subscribe(res => {
      this.list = res
      console.log(this.list)
    })
  }

}
