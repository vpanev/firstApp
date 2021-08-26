import { ClothDetail } from './../../shared/cloth-detail.model';
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

  items: ClothDetail[] = []
  totalSum: number = 0
  ngOnInit(): void {
    this.loadCart()
  }
  loadCart() {
    this.items = this.cartService.loadCart();
  }
  clearCart() {
    this.cartService.clearCart();

    this.toastr.success(`Cleared`)
    this.loadCart();
  }
  removeItem(item) {
    this.cartService.removeItem(item);
    this.toastr.success(`Product ${item.clothName} removed from your cart!`)
    this.loadCart();
  }
  addQty(item) {
    this.cartService.addQuantity(item);
    this.loadCart();

  }
  removeQty(item) {
    this.cartService.removeQuantity(item)
    this.loadCart();

  }
  getTotalSum() {
    return this.cartService.getTotalSum()
  }



}
