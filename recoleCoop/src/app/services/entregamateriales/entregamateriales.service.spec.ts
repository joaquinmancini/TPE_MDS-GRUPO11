import { TestBed } from '@angular/core/testing';

import { EntregamaterialesService } from './entregamateriales.service';

describe('EntregamaterialesService', () => {
  let service: EntregamaterialesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntregamaterialesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
