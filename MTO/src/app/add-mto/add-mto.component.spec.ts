import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMTOComponent } from './add-mto.component';

describe('AddMTOComponent', () => {
  let component: AddMTOComponent;
  let fixture: ComponentFixture<AddMTOComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMTOComponent]
    });
    fixture = TestBed.createComponent(AddMTOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
