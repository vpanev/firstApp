
import { ClothDetailService } from './../../shared/services/cloth-detail.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClothDetail } from 'src/app/shared/cloth-detail.model';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-cloth',
  templateUrl: './add-edit-cloth.component.html',
  styleUrls: ['./add-edit-cloth.component.css']
})
export class AddEditClothComponent implements OnInit {

  constructor(public service: ClothDetailService, private toastr: ToastrService) { }


  PhotoFileName: string;
  PhotoFilePath: string;
  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    if (this.service.formData.clothId == 0) {
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }


  populateForm(selectedRecord: ClothDetail) {
    this.service.formData = selectedRecord;
  }

  insertRecord(form: NgForm) {
    this.service.postClothDetail().subscribe(res => {
      this.resetForm(form);

      this.toastr.success('Submitted successfully!', 'Cloth App')
      this.service.refreshList();
    },
      err => { console.log(err); })

  }

  updateRecord(form: NgForm) {

    this.service.putClothDetail().subscribe(res => {
      this.resetForm(form);

      this.toastr.info('Updated successfully!', 'Cloth App')
      this.service.refreshList();
    },
      err => { console.log(err); })

  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new ClothDetail();
  }


}
