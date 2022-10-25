import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondHandMenuComponent } from './second-hand-menu.component';

describe('SecondHandMenuComponent', () => {
  let component: SecondHandMenuComponent;
  let fixture: ComponentFixture<SecondHandMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondHandMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondHandMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
