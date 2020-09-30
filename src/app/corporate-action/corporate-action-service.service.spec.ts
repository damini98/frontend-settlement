import { TestBed } from '@angular/core/testing';

import { CorporateActionServiceService } from './corporate-action-service.service';

describe('CorporateActionServiceService', () => {
  let service: CorporateActionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorporateActionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
