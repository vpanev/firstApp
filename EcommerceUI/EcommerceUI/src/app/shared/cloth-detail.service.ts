import { CartComponent } from './../cloth-detail/cart/cart.component';
import { ClothDetailComponent } from './../cloth-detail/cloth-detail.component';
import { ClothDetail } from './cloth-detail.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ClothDetailService {

  constructor(private http: HttpClient) { }
  readonly baseUrl = "https://localhost:44315/api/Clothes";
  formData: ClothDetail = new ClothDetail();



  refreshList() {
    return this.http.get<any>(this.baseUrl);
  }
  postClothDetail() {
    return this.http.post(this.baseUrl, this.formData);
  }
  putClothDetail() {
    return this.http.put(`${this.baseUrl}/${this.formData.clothId}`, this.formData);
  }
}
