import { TestBed } from '@angular/core/testing';

import { CartoneroService } from './cartonero.service';

describe('CartoneroService', () => {
  let service: CartoneroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartoneroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
