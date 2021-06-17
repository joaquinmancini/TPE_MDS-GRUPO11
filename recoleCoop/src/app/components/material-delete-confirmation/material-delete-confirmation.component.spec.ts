import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDeleteConfirmationComponent } from './material-delete-confirmation.component';

describe('MaterialDeleteConfirmationComponent', () => {
  let component: MaterialDeleteConfirmationComponent;
  let fixture: ComponentFixture<MaterialDeleteConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialDeleteConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialDeleteConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
