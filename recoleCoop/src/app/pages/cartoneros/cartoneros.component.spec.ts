import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartonerosComponent } from './cartoneros.component';

describe('CartonerosComponent', () => {
  let component: CartonerosComponent;
  let fixture: ComponentFixture<CartonerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartonerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartonerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
