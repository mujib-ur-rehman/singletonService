import { TestBed } from '@angular/core/testing';

import { SingletonserviceService } from './singletonservice.service';

describe('SingletonserviceService', () => {
  let service: SingletonserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingletonserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
