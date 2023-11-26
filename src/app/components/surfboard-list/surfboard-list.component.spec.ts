import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfboardListComponent } from './surfboard-list.component';

describe('SurfboardListComponent', () => {
  let component: SurfboardListComponent;
  let fixture: ComponentFixture<SurfboardListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurfboardListComponent]
    });
    fixture = TestBed.createComponent(SurfboardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
