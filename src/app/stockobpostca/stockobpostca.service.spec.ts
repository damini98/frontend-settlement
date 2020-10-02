import { TestBed } from '@angular/core/testing';

import { StockobpostcaService } from './stockobpostca.service';

describe('StockobpostcaService', () => {
  let service: StockobpostcaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockobpostcaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
