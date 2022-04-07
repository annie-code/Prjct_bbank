import { TestBed } from '@angular/core/testing';

import { CampregdService } from './campregd.service';

describe('CampregdService', () => {
  let service: CampregdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampregdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
