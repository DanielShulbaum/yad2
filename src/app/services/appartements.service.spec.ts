import { TestBed } from '@angular/core/testing';

import { AppartementsService } from './appartements.service';

describe('AppartementsService', () => {
  let service: AppartementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppartementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
