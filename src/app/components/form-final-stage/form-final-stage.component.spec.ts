import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFinalStageComponent } from './form-final-stage.component';

describe('FormFinalStageComponent', () => {
  let component: FormFinalStageComponent;
  let fixture: ComponentFixture<FormFinalStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFinalStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFinalStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
