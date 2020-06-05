import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionCollectionDropDownComponent } from './action-collection-drop-down.component';

describe('ActionCollectionDropDownComponent', () => {
  let component: ActionCollectionDropDownComponent;
  let fixture: ComponentFixture<ActionCollectionDropDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionCollectionDropDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionCollectionDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
