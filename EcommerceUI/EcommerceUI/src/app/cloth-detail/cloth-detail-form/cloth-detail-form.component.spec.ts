import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothDetailFormComponent } from './cloth-detail-form.component';

describe('ClothDetailFormComponent', () => {
  let component: ClothDetailFormComponent;
  let fixture: ComponentFixture<ClothDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClothDetailFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
