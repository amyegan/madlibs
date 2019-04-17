import { TestBed } from '@angular/core/testing';

import { MadlibsService } from './madlibs.service';

describe('MadlibsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MadlibsService = TestBed.get(MadlibsService);
    expect(service).toBeTruthy();
  });
});
