import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPaymentsComponent } from './post-payments.component';

describe('PostPaymentsComponent', () => {
  let component: PostPaymentsComponent;
  let fixture: ComponentFixture<PostPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostPaymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
