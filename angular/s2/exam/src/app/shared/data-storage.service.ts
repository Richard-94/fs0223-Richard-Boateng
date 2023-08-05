import { AllRecipesService } from './../emails/service/all-recipes.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../emails/recipes/recipe';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  address:string = 'https://recipes-exercise-default-rtdb.europe-west1.firebasedatabase.app/recipes.json'

  constructor(private http:HttpClient, private recipeSvc:AllRecipesService) { }


  storeRecipes(){
    const recipes = this.recipeSvc.getRecipes();
    this.http.put(this.address,recipes).
    subscribe(response=>{
      console.log(response);

    })

  }

  fetchRecipe(){
    this.http.get<Recipe[]>(this.address).subscribe(recipes=>{
      console.log(recipes)
      this.recipeSvc.setRecipes(recipes)

    })
  }
}
