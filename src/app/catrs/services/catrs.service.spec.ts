import { TestBed } from '@angular/core/testing';

import { CatrsService } from './catrs.service';

describe('CatrsService', () => {
  let service: CatrsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatrsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
