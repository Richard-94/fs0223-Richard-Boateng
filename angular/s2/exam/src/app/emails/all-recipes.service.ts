import { Injectable } from '@angular/core';
import { Recipe } from './recipes/recipe';
import { Ingredients } from 'src/app/shared/ingredients';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllRecipesService {
 //recipeSelected = new Subject<Recipe>();
  startEditing = new Subject<number>();

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


}

