import { TestBed, inject } from '@angular/core/testing';

import { SlidesRouteNavigatorService } from './slides-route-navigator.service';

describe('SlidesRouteNavigatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SlidesRouteNavigatorService]
    });
  });

  it('should be created', inject([SlidesRouteNavigatorService], (service: SlidesRouteNavigatorService) => {
    expect(service).toBeTruthy();
  }));
});
