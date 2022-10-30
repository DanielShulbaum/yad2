import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppartementPostComponent } from './appartement-post.component';

describe('AppartementPostComponent', () => {
  let component: AppartementPostComponent;
  let fixture: ComponentFixture<AppartementPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppartementPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppartementPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
