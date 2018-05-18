import { TestBed, inject } from '@angular/core/testing';

import { SchoolAppService } from './school-app.service';

describe('SchoolAppService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchoolAppService]
    });
  });

  it('should be created', inject([SchoolAppService], (service: SchoolAppService) => {
    expect(service).toBeTruthy();
  }));
});
