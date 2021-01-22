import { TestBed } from '@angular/core/testing';

import { NativeLocationService } from './native-location.service';

describe('NativeLocationService', () => {
  let service: NativeLocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NativeLocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
