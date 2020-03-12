import { TestBed } from '@angular/core/testing';

import { ServtestService } from './servtest.service';

describe('ServtestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServtestService = TestBed.get(ServtestService);
    expect(service).toBeTruthy();
  });
});
