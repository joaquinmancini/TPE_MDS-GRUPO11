import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartoneroCreateFormComponent } from './cartonero-create-form.component';

describe('CartoneroCreateFormComponent', () => {
  let component: CartoneroCreateFormComponent;
  let fixture: ComponentFixture<CartoneroCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartoneroCreateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartoneroCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
