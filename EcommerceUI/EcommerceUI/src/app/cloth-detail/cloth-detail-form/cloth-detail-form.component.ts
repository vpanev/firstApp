import { ClothDetail } from 'src/app/shared/cloth-detail.model';
import { AddEditClothComponent } from './../add-edit-cloth/add-edit-cloth.component';
import { ToastrService } from 'ngx-toastr';
import { CartService } from './../../shared/cart.service';

import { ClothDetailComponent } from './../cloth-detail.component';
import { ClothDetailService } from './../../shared/cloth-detail.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cloth-detail-form',
  templateUrl: './cloth-detail-form.component.html',
  styleUrls: ['./cloth-detail-form.component.css']
})
export class ClothDetailFormComponent implements OnInit {

  constructor(public service: ClothDetailService, public cartService: CartService,
    public toastr: ToastrService, private router: Router) { }

  private addEdit: AddEditClothComponent;

  ngOnInit(): void {
    this.refreshList();
  }

  list: any = [];
  item: any;
  refreshList() {
    this.service.refreshList().subscribe(data => {
      this.list = data;
      this.filteredClothes = this.list;
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

  deleteCloth(id: number, name: string) {
    if (confirm("Are you sure you want to delete " + name + " ?")) {
      this.service.deleteClothDetail(id).subscribe(res => {
        this.refreshList();
        this.toastr.success("Item Deleted!")
      })
    } else {
      this.toastr.warning("Failed Deleting!")
    }
  }
  redirectToEdit(itemId: number, item: ClothDetail) {

    this.router.navigate([`./add`])
    this.service.formData = item;
  }

  filteredClothes: any[] = [];
  filter(data: string) {
    if (data) {
      this.filteredClothes = this.list.filter((cloth: ClothDetail) => {
        return cloth.clothName.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
          cloth.clothBrand.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
          cloth.clothPrice.toString().indexOf(data.toLowerCase()) > -1 ||
          cloth.clothSize.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
          cloth.clothType.toLowerCase().indexOf(data.toLowerCase()) > -1;
      });
    } else {
      this.filteredClothes = this.list;
    }
  }


}
