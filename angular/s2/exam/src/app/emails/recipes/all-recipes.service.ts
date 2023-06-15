import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredients } from 'src/app/shared/ingredients';

@Injectable({
  providedIn: 'root'
})
export class AllRecipesService {
   recipes: Recipe[] = [
    new Recipe(
      'A test',
      'simple test',
      'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/one_pan_sausage_pasta_55251_16x9.jpg',
      1,
      [
        new Ingredients('Meat', 1),
        new Ingredients('Nuggets', 10)
      ]
    ),
    new Recipe(
      'Rice',
      'jollof',
      'https://zenaskitchen.com/wp-content/uploads/2022/12/jollof-rice.jpg',
      2,
      [
        new Ingredients('Meat', 1),
        new Ingredients('Nuggets', 10)
      ]
    )
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipeById(id: number): Recipe | undefined {
    const recipe = this.recipes.find(recipe => recipe.id === id);
    if (recipe) {
      return { ...recipe, ingredients: [...recipe.ingredients] };
    }
    return undefined;
  }

}
