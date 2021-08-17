import { AuthenticationService } from './authentication.service';
import { ClothDetail } from 'src/app/shared/cloth-detail.model';
import { ClothDetailComponent } from './../../cloth-detail/cloth-detail.component';
import { CartComponent } from './../../cloth-detail/cart/cart.component';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ClothDetailService {

  constructor(private http: HttpClient, private _authService: AuthenticationService, private router: Router) { }
  readonly baseUrl = "https://localhost:44315/api/Clothes";
  formData: ClothDetail = new ClothDetail();



  refreshList() {
    return this.http.get<any>(this.baseUrl);
  }
  getData() {
    return this.http.get(this.baseUrl + "/privacy")
  }
  postClothDetail() {
    return this.http.post(this.baseUrl, this.formData);
  }
  putClothDetail() {
    return this.http.put(`${this.baseUrl}/${this.formData.clothId}`, this.formData);
  }
  deleteClothDetail(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
