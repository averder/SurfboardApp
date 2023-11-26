import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSurfboardComponent } from './add-edit-surfboard.component';

describe('AddEditSurfboardComponent', () => {
  let component: AddEditSurfboardComponent;
  let fixture: ComponentFixture<AddEditSurfboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditSurfboardComponent]
    });
    fixture = TestBed.createComponent(AddEditSurfboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
