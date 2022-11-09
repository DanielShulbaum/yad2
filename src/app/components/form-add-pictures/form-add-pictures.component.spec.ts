import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddPicturesComponent } from './form-add-pictures.component';

describe('FormAddPicturesComponent', () => {
  let component: FormAddPicturesComponent;
  let fixture: ComponentFixture<FormAddPicturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddPicturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
