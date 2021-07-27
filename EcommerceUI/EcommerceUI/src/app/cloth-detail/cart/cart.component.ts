import { ToastrService } from 'ngx-toastr';
import { CartService } from './../../shared/cart.service';
import { ClothDetailFormComponent } from './../cloth-detail-form/cloth-detail-form.component';
import { ClothDetailComponent } from './../cloth-detail.component';
import { ClothDetailService } from './../../shared/cloth-detail.service';
import { Component, OnInit } from '@angular/core';
import { ClothDetail } from 'src/app/shared/cloth-detail.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public service: ClothDetailService, public cartService: CartService,
    private toastr: ToastrService) { }

  items = this.cartService.loadCart();
  ngOnInit(): void {
    this.loadCart()
  }
  // cloth1: ClothDetail = {
  //   clothId: 0,
  //   clothName: 'ASDASDASD',
  //   clothBrand: 'ASDASDASD',
  //   clothSize: 'XS',
  //   clothType: 'JEANSSSSS',
  //   photoFileName: '',
  //   clothPrice: 55
  // }
  // cloth2: ClothDetail = {
  //   clothId: 0,
  //   clothName: 'ASDASDASD',
  //   clothBrand: 'ASDASDASD',
  //   clothSize: 'XS',
  //   clothType: 'JEANSSSSS',
  //   photoFileName: '',
  //   clothPrice: 55
  // }
  loadCart() {
    this.items = this.cartService.loadCart();
    // this.items.push(this.cloth1);
    // this.items.push(this.cloth2);
  }
  clearCart() {
    this.cartService.clearCart();
    this.loadCart();
  }
  removeItem(item) {
    this.cartService.removeItem(item);
    this.toastr.success(`Product ${item.clothName} removed from your cart!`)
  }



}
