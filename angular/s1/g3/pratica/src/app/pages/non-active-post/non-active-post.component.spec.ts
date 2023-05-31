import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonActivePostComponent } from './non-active-post.component';

describe('NonActivePostComponent', () => {
  let component: NonActivePostComponent;
  let fixture: ComponentFixture<NonActivePostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NonActivePostComponent]
    });
    fixture = TestBed.createComponent(NonActivePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
