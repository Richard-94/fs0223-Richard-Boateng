import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { AllRecipesService } from '../all-recipes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.scss']
})
export class RecipesDetailComponent implements OnInit {
  recipe: Recipe | undefined;

  constructor(
    private route: ActivatedRoute,
    private recipeService: AllRecipesService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const recipeId = Number(params.get('id'));
      this.recipe = this.recipeService.getRecipeById(recipeId);
    });
  }

}
