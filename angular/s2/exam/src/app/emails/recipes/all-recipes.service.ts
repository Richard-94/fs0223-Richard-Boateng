import { Injectable } from '@angular/core';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root'
})
export class AllRecipesService {
  private recipes: Recipe[] = [
    new Recipe('A test', 'simple test', 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/one_pan_sausage_pasta_55251_16x9.jpg',1),
    new Recipe('Rice', 'jollof', 'https://zenaskitchen.com/wp-content/uploads/2022/12/jollof-rice.jpg', 2)
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice(); // Get a copy of the recipes array
  }

  getRecipeById(id: number): Recipe | undefined {
    return this.recipes.find(recipe => recipe.id === id);
  }
}




//const recipes: Recipe[] = apiResponse.map(recipeData => new Recipe(recipeData.name, recipeData.description, recipeData.imagePath, recipeData.id));
