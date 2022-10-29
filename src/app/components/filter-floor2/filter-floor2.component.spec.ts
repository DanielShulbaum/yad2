import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterFloor2Component } from './filter-floor2.component';

describe('FilterFloor2Component', () => {
  let component: FilterFloor2Component;
  let fixture: ComponentFixture<FilterFloor2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterFloor2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterFloor2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
