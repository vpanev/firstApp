import { ToastrService } from 'ngx-toastr';
import { CartService } from './../../shared/cart.service';

import { ClothDetailComponent } from './../cloth-detail.component';
import { ClothDetail } from './../../shared/cloth-detail.model';
import { ClothDetailService } from './../../shared/cloth-detail.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cloth-detail-form',
  templateUrl: './cloth-detail-form.component.html',
  styleUrls: ['./cloth-detail-form.component.css']
})
export class ClothDetailFormComponent implements OnInit {

  constructor(public service: ClothDetailService, public cartService: CartService,
    public toastr: ToastrService) { }


  ngOnInit(): void {
    this.refreshList();
  }

  list: any = [];
  item: any;
  refreshList() {
    this.service.refreshList().subscribe(data => {
      this.list = data;
    });
  }

  addItemToCart(id: number) {
    this.cartService.getClothById(id).subscribe(data => {
      this.item = data;
      this.toastr.info("Item added to your cart!")
      this.cartService.addToCart(this.item);
      console.log(this.cartService.loadCart())
    })
  }

}
