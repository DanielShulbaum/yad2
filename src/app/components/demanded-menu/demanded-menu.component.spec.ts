import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandedMenuComponent } from './demanded-menu.component';

describe('DemandedMenuComponent', () => {
  let component: DemandedMenuComponent;
  let fixture: ComponentFixture<DemandedMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandedMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandedMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
