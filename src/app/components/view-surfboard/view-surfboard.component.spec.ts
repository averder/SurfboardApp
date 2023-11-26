import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSurfboardComponent } from './view-surfboard.component';

describe('ViewSurfboardComponent', () => {
  let component: ViewSurfboardComponent;
  let fixture: ComponentFixture<ViewSurfboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewSurfboardComponent]
    });
    fixture = TestBed.createComponent(ViewSurfboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
