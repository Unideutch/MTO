import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditingMTOComponent } from './editing-mto.component';

describe('EditingMTOComponent', () => {
  let component: EditingMTOComponent;
  let fixture: ComponentFixture<EditingMTOComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditingMTOComponent]
    });
    fixture = TestBed.createComponent(EditingMTOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
