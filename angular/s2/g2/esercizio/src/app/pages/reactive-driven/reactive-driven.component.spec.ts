import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveDrivenComponent } from './reactive-driven.component';

describe('ReactiveDrivenComponent', () => {
  let component: ReactiveDrivenComponent;
  let fixture: ComponentFixture<ReactiveDrivenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveDrivenComponent]
    });
    fixture = TestBed.createComponent(ReactiveDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
