import { TestBed } from '@angular/core/testing';

import { AlphaServiceService } from './alpha-service.service';

describe('AlphaServiceService', () => {
  let service: AlphaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlphaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
