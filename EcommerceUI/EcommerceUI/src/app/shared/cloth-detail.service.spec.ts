import { TestBed } from '@angular/core/testing';

import { ClothDetailService } from './cloth-detail.service';

describe('ClothDetailService', () => {
  let service: ClothDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClothDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
