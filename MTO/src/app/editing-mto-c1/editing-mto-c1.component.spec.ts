import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditingMTOC1Component } from './editing-mto-c1.component';

describe('EditingMTOC1Component', () => {
  let component: EditingMTOC1Component;
  let fixture: ComponentFixture<EditingMTOC1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditingMTOC1Component]
    });
    fixture = TestBed.createComponent(EditingMTOC1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
