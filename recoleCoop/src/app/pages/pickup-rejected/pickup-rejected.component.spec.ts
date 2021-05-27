import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupRejectedComponent } from './pickup-rejected.component';

describe('PickupRejectedComponent', () => {
  let component: PickupRejectedComponent;
  let fixture: ComponentFixture<PickupRejectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickupRejectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickupRejectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
