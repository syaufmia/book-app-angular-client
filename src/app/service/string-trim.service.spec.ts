import { TestBed } from '@angular/core/testing';

import { StringTrimService } from './string-trim.service';

describe('StringTrimService', () => {
  let service: StringTrimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringTrimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
