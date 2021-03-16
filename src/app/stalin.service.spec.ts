import { TestBed } from '@angular/core/testing';

import { StalinService } from './stalin.service';

describe('StalinService', () => {
  let service: StalinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StalinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
