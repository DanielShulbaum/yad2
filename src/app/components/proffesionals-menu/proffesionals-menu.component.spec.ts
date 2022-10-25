import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProffesionalsMenuComponent } from './proffesionals-menu.component';

describe('ProffesionalsMenuComponent', () => {
  let component: ProffesionalsMenuComponent;
  let fixture: ComponentFixture<ProffesionalsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProffesionalsMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProffesionalsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
