import { ClothDetailService } from './../shared/services/cloth-detail.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {
  public claims: [] = [];
  constructor(private _repository: ClothDetailService) { }
  ngOnInit(): void {
    this.getClaims();
  }
  public getClaims = () => {
    this._repository.getData()
      .subscribe(res => {
        this.claims = res as [];
        console.log(this.claims);
      })
  }
}
