import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { AllRecipesService } from '../all-recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],

})
export class RecipesListComponent implements OnInit {
  recipes!: Recipe[];

  constructor (private recipeService:AllRecipesService){}



  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes()
  }

}
