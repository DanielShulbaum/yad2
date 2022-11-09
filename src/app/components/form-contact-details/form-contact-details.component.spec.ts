import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormContactDetailsComponent } from './form-contact-details.component';

describe('FormContactDetailsComponent', () => {
  let component: FormContactDetailsComponent;
  let fixture: ComponentFixture<FormContactDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormContactDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormContactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
