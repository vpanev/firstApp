import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditClothComponent } from './add-edit-cloth.component';

describe('AddEditClothComponent', () => {
  let component: AddEditClothComponent;
  let fixture: ComponentFixture<AddEditClothComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditClothComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditClothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
