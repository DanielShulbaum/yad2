import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedMenuComponent } from './liked-menu.component';

describe('LikedMenuComponent', () => {
  let component: LikedMenuComponent;
  let fixture: ComponentFixture<LikedMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikedMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikedMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
