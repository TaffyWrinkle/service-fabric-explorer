import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySizeColumnComponent } from './display-size-column.component';

describe('DisplaySizeColumnComponent', () => {
  let component: DisplaySizeColumnComponent;
  let fixture: ComponentFixture<DisplaySizeColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaySizeColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySizeColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
