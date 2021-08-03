import { ClothDetailService } from './../shared/services/cloth-detail.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cloth-detail',
  templateUrl: './cloth-detail.component.html',
  styleUrls: ['./cloth-detail.component.css']
})
export class ClothDetailComponent implements OnInit {

  constructor(public service: ClothDetailService) { }

  ngOnInit(): void {
  }

}
