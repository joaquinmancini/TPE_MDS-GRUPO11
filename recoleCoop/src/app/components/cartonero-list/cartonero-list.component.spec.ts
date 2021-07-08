import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartoneroListComponent } from './cartonero-list.component';

describe('CartoneroListComponent', () => {
  let component: CartoneroListComponent;
  let fixture: ComponentFixture<CartoneroListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartoneroListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartoneroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
