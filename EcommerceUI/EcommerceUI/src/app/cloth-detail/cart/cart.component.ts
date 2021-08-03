import { CartService } from './../../shared/services/cart.service';
import { ClothDetailService } from './../../shared/services/cloth-detail.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';

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

    this.toastr.success(`Cleared`)
    this.loadCart();
  }
  removeItem(item) {
    this.cartService.removeItem(item);
    this.toastr.success(`Product ${item.clothName} removed from your cart!`)
  }



}
