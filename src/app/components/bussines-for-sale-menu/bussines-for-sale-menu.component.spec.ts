import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinesForSaleMenuComponent } from './bussines-for-sale-menu.component';

describe('BussinesForSaleMenuComponent', () => {
  let component: BussinesForSaleMenuComponent;
  let fixture: ComponentFixture<BussinesForSaleMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BussinesForSaleMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BussinesForSaleMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
