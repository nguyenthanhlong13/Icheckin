/* tslint:disable:no-unused-variable */
import { TestBed, async, inject } from '@angular/core/testing';
import { PublicServiceService } from './public-service.service';

describe('Service: PublicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PublicServiceService]
    });
  });

  it('should ...', inject([PublicServiceService], (service: PublicServiceService) => {
    expect(service).toBeTruthy();
  }));
});
