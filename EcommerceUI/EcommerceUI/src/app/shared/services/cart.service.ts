import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ClothDetail } from '../cloth-detail.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) {
  }
  subject: Subject<any>;
  readonly baseUrl = "https://localhost:44315/api/Clothes";
  cart: ClothDetail[] = [];
  totalSum: number = 0
  getClothById(id: number) {
    return this.http.get(this.baseUrl + "/" + id);
  }
  addToCart(item: ClothDetail) {
    let equals = false;
    this.cart.forEach((element, index) => {
      if (element.clothId == item.clothId) {
        this.cart[index].quantity += 1
        equals = true;
      }
    })
    if (!equals) {
      this.cart.push(item)
    }
    localStorage.setItem('cart', JSON.stringify(this.cart))
  }

  getTotalSum() {
    var allSum = JSON.parse(localStorage.getItem("cart"))
    let prices = []
    for (var i = 0; i < allSum.length; i++) {
      prices.push(allSum[i].clothPrice)
    }
    for (var i = 0; i < prices.length; i++) {
      this.totalSum += prices[i]
    }

    return this.totalSum
  }

  loadCart() {
    this.cart = JSON.parse(localStorage.getItem("cart"))
    // if (localStorage.getItem("cart") === null) {
    //   return this.cart
    // }
    return JSON.parse(localStorage.getItem("cart"));
  }
  clearCart() {
    this.cart = [];
    localStorage.setItem("cart", JSON.stringify(this.cart))
    // this.loadCart();
    // return this.cart;
  }
  removeItem(item: ClothDetail) {
    this.cart.forEach((element, index) => {
      if (element.clothId == item.clothId) {
        this.cart.splice(index, 1);
      }
    })
    localStorage.setItem('cart', JSON.stringify(this.cart))
    this.loadCart();
  }

  addQuantity(item: ClothDetail) {
    this.cart.forEach((element, index) => {
      if (element.clothId == item.clothId) {
        this.cart[index].quantity += 1
      }
    })
    localStorage.setItem('cart', JSON.stringify(this.cart))
  }
  removeQuantity(item: ClothDetail) {
    this.cart.forEach((element, index) => {
      if (element.clothId == item.clothId) {
        if (item.quantity <= 1 || this.cart[index].quantity <= 1) {
          return
        }
        else {
          this.cart[index].quantity -= 1
        }
      }
    })
    console.log(this.cart)
    localStorage.setItem('cart', JSON.stringify(this.cart))
  }


}
