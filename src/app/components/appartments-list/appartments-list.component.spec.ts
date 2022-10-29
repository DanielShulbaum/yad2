import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppartmentsListComponent } from './appartments-list.component';

describe('AppartmentsListComponent', () => {
  let component: AppartmentsListComponent;
  let fixture: ComponentFixture<AppartmentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppartmentsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppartmentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
