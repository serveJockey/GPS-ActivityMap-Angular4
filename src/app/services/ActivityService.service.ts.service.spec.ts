/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ActivityService.service.tsService } from './ActivityService.service.ts.service';

describe('Service: ActivityService.service.ts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActivityService.service.tsService]
    });
  });

  it('should ...', inject([ActivityService.service.tsService], (service: ActivityService.service.tsService) => {
    expect(service).toBeTruthy();
  }));
});
