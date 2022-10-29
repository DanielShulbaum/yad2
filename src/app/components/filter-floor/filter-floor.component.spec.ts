import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterFloorComponent } from './filter-floor.component';

describe('FilterFloorComponent', () => {
  let component: FilterFloorComponent;
  let fixture: ComponentFixture<FilterFloorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterFloorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterFloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
