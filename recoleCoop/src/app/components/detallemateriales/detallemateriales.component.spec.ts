import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallematerialesComponent } from './detallemateriales.component';

describe('DetallematerialesComponent', () => {
  let component: DetallematerialesComponent;
  let fixture: ComponentFixture<DetallematerialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallematerialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallematerialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
