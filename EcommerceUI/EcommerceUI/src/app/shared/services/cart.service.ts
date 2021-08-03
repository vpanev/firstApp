import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClothDetail } from '../cloth-detail.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) {
  }
  readonly baseUrl = "https://localhost:44315/api/Clothes";
  cart: ClothDetail[] = [];
  getClothById(id: number) {
    return this.http.get(this.baseUrl + "/" + id);
  }
  addToCart(item: ClothDetail) {
    this.cart.push(item);
  }
  loadCart() {
    return this.cart;
  }
  clearCart() {
    this.cart = [];
    return this.cart;
  }
  removeItem(item: ClothDetail) {
    this.cart.forEach((element, index) => {
      if (element.clothId == item.clothId) {
        this.cart.splice(index, 1);
      }
    })
  }
}
