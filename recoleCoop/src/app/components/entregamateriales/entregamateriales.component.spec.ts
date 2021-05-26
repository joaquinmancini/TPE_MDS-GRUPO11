import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregamaterialesComponent } from './entregamateriales.component';

describe('EntregamaterialesComponent', () => {
  let component: EntregamaterialesComponent;
  let fixture: ComponentFixture<EntregamaterialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntregamaterialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntregamaterialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
