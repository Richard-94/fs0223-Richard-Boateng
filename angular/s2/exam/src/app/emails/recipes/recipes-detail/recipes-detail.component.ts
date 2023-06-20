import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe';
import { AllRecipesService } from '../../service/all-recipes.service';
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
      this.id = recipeId; // Assign the recipeId to the id variable
    });
  }


  editMe(recipeId?: number) {
    if (recipeId) {
      this.recipeService.startEditing.next(recipeId);
      this.router.navigate(['/emails/recipe-edit', recipeId]);

      this.recipeService.startEditing.next(recipeId); // Pass the recipe ID to the service
      console.log('recipe id', recipeId);
      this.router.navigate(['/emails/header', recipeId]); // Navigate to the edit page

    }
  }

  onDelete() {
    if (this.id !== undefined) {
      this.recipeService.delRecipe(this.id);
      this.router.navigate(['/emails/recipe']);
    }
  }

}

