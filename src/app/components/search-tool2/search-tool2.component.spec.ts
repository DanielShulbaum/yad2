import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTool2Component } from './search-tool2.component';

describe('SearchTool2Component', () => {
  let component: SearchTool2Component;
  let fixture: ComponentFixture<SearchTool2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchTool2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTool2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
