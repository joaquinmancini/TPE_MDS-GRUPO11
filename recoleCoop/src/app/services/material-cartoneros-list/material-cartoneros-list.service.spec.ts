import { TestBed } from '@angular/core/testing';

import { MaterialCartonerosListService } from './material-cartoneros-list.service';

describe('MaterialCartonerosListService', () => {
  let service: MaterialCartonerosListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterialCartonerosListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
