import { TestBed } from '@angular/core/testing';

import { ModifyServiceService } from './modify-camp.service';

describe('ModifyCampService', () => {
  let service: ModifyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModifyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
