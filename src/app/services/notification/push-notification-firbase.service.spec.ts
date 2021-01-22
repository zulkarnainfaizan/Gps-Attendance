import { TestBed } from '@angular/core/testing';

import { PushNotificationFirbaseService } from './push-notification-firbase.service';

describe('PushNotificationFirbaseService', () => {
  let service: PushNotificationFirbaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PushNotificationFirbaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
