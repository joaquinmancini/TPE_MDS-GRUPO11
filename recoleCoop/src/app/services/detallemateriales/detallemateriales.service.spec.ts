import { TestBed } from '@angular/core/testing';

import { DetallematerialesService } from './detallemateriales.service';

describe('DetallematerialesService', () => {
  let service: DetallematerialesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetallematerialesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
