import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesDetailComponent } from './recipes-detail.component';

describe('RecipesDetailComponent', () => {
  let component: RecipesDetailComponent;
  let fixture: ComponentFixture<RecipesDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipesDetailComponent]
    });
    fixture = TestBed.createComponent(RecipesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
