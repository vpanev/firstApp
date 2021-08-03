import { ClothDetailService } from './../../shared/services/cloth-detail.service';
import { ClothDetail } from 'src/app/shared/cloth-detail.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  constructor(public service: ClothDetailService) { }

  ngOnInit(): void {
    this.loadBrands();

  }
  brandList: any = [];
  loadBrands() {
    this.service.refreshList().subscribe(data => {
      this.brandList = data;
    })


  }


}
