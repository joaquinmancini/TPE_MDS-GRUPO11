import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartoneroUpdateFormComponent } from './cartonero-update-form.component';

describe('CartoneroUpdateFormComponent', () => {
  let component: CartoneroUpdateFormComponent;
  let fixture: ComponentFixture<CartoneroUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartoneroUpdateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartoneroUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
