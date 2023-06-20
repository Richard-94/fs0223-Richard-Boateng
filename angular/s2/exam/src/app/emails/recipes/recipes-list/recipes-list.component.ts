

import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { AllRecipesService } from '../../service/all-recipes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [];
  private recipesChangedSubscription!: Subscription;

  constructor(private recipeService: AllRecipesService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
    this.recipesChangedSubscription = this.recipeService.recipesChanged.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    });
    this.recipes=this.recipeService.getRecipes()
  }


  ngOnDestroy(): void {
    this.recipesChangedSubscription.unsubscribe();
  }
}
