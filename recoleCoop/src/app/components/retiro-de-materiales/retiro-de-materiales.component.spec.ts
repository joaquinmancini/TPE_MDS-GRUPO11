import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetiroDeMaterialesComponent } from './retiro-de-materiales.component';

describe('RetiroDeMaterialesComponent', () => {
  let component: RetiroDeMaterialesComponent;
  let fixture: ComponentFixture<RetiroDeMaterialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetiroDeMaterialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetiroDeMaterialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
