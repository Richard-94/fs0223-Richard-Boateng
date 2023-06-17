import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe';
import { AllRecipesService } from '../all-recipes.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.scss']
})
export class RecipesDetailComponent implements OnInit {
  recipe: Recipe | undefined;
  recipeForm!: FormGroup;
  id!: number | undefined;
  editMode = false;
  myNumber!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: AllRecipesService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const recipeId = Number(params.get('id'));
      this.recipe = this.recipeService.getRecipeById(recipeId);
      console.log('Recipe:', this.recipe); // Log the retrieved recipe
    });
  }

  editMe(recipeId?: number) {
    if (recipeId) {
      this.recipeService.startEditing.next(recipeId);
      this.router.navigate(['/emails/recipe-edit', recipeId]);
      console.log('recipe id', recipeId);
      this.recipeService.startEditing.next(recipeId); // Pass the recipe ID to the service
      this.router.navigate(['/emails/recipe-edit', recipeId]); // Navigate to the edit page

      // Set editMode to true in RecipesEditComponent
      this.recipeService.startEditing.next(recipeId);
    }
  }

}
