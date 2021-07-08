import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartoneroDeleteConfirmationComponent } from './cartonero-delete-confirmation.component';

describe('CartoneroDeleteConfirmationComponent', () => {
  let component: CartoneroDeleteConfirmationComponent;
  let fixture: ComponentFixture<CartoneroDeleteConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartoneroDeleteConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartoneroDeleteConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
