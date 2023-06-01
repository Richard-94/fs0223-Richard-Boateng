import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivePostComponent } from './active-post.component';

describe('ActivePostComponent', () => {
  let component: ActivePostComponent;
  let fixture: ComponentFixture<ActivePostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivePostComponent]
    });
    fixture = TestBed.createComponent(ActivePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
