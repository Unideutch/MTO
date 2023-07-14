import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpeViewComponent } from './simpe-view.component';

describe('SimpeViewComponent', () => {
  let component: SimpeViewComponent;
  let fixture: ComponentFixture<SimpeViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpeViewComponent]
    });
    fixture = TestBed.createComponent(SimpeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
