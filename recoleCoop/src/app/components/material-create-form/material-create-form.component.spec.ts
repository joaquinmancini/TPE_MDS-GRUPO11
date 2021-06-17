import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialCreateFormComponent } from './material-create-form.component';

describe('MaterialFormComponent', () => {
  let component: MaterialCreateFormComponent;
  let fixture: ComponentFixture<MaterialCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialCreateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
