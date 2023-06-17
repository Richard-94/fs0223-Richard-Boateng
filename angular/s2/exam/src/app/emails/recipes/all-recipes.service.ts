import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredients } from 'src/app/shared/ingredients';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllRecipesService {
  recipeSelected = new Subject<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A test',
      'simple test',
      'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/one_pan_sausage_pasta_55251_16x9.jpg',
      0,
      [
        new Ingredients('Meat', 1),
        new Ingredients('pasta', 1),

      ]
    ),
    new Recipe(
      'Rice',
      'jollof',
      'https://zenaskitchen.com/wp-content/uploads/2022/12/jollof-rice.jpg',
      1,
      [
        new Ingredients('plantain', 10),

      ]
    )
  ];

  constructor() {}

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipeById(index: number): Recipe {
    return this.recipes[index];
  }
}
