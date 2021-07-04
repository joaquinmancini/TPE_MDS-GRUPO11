import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialCartonerosListComponent } from './material-cartoneros-list.component';

describe('MaterialCartonerosListComponent', () => {
  let component: MaterialCartonerosListComponent;
  let fixture: ComponentFixture<MaterialCartonerosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialCartonerosListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialCartonerosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
