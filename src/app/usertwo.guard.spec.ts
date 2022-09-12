import { TestBed } from '@angular/core/testing';

import { UsertwoGuard } from './usertwo.guard';

describe('UsertwoGuard', () => {
  let guard: UsertwoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UsertwoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
