import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeMenuComponent } from './notice-menu.component';

describe('NoticeMenuComponent', () => {
  let component: NoticeMenuComponent;
  let fixture: ComponentFixture<NoticeMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticeMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
