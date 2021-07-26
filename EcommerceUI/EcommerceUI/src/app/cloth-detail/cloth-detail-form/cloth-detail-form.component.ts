import { ClothDetail } from './../../shared/cloth-detail.model';
import { ClothDetailService } from './../../shared/cloth-detail.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cloth-detail-form',
  templateUrl: './cloth-detail-form.component.html',
  styleUrls: ['./cloth-detail-form.component.css']
})
export class ClothDetailFormComponent implements OnInit {

  constructor(public service: ClothDetailService) { }

  ngOnInit(): void {
    this.refreshList();
  }


  list: any = [];
  refreshList() {
    this.service.refreshList().subscribe(data => {
      this.list = data;
    });
  }

}
