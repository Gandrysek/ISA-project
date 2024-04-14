import { TestBed } from '@angular/core/testing';

import { GunClassService } from './gunClass.service';

describe('GunClassService', () => {
  let service: GunClassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GunClassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
