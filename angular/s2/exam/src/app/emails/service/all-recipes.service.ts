import { Injectable } from '@angular/core';

import { Ingredients } from 'src/app/shared/ingredients';
import { Subject } from 'rxjs';
import { Recipe } from '../recipes/recipe';

@Injectable({
  providedIn: 'root'
})
export class AllRecipesService {
 //recipeSelected = new Subject<Recipe>();
  startEditing = new Subject<number>();
  recipesChanged = new Subject<Recipe[]>()

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
    ),
    new Recipe(
      'yam',
      'ampesie',
      'https://static.finmail.com/wp-content/uploads/2020/06/18155318/IMG_1573.jpg',
      2,
      [
        new Ingredients('plantain', 10),

      ]
    )
  ];





  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipeById(index: number): Recipe | undefined {
    return this.recipes[index];
  }

  addRecipe(recipe:Recipe){
    this.recipes.push(recipe)
    this.recipesChanged.next(this.recipes.slice())
  }


  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice()); // Emit updated recipes
    newRecipe;
  }


  delRecipe(index: number) {
    this.recipes.splice(index, 1); // Use splice instead of slice
    this.recipesChanged.next(this.recipes.slice());
  }


}


