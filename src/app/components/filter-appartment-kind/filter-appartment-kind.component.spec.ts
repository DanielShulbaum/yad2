import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterAppartmentKindComponent } from './filter-appartment-kind.component';

describe('FilterAppartmentKindComponent', () => {
  let component: FilterAppartmentKindComponent;
  let fixture: ComponentFixture<FilterAppartmentKindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterAppartmentKindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterAppartmentKindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
