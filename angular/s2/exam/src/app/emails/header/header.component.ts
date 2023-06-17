import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipes/recipe';
import { AllRecipesService } from '../all-recipes.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuCollapsed = true;
  recipeForm!: FormGroup;
  editMode = false;
  editedItemIndex!: number;
  editedItem: Recipe | undefined;
  subscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private recipeService: AllRecipesService
  ) {}

  ngOnInit(): void {
    console.log('Subject:', this.recipeService.startEditing);
    console.log('Initializing RecipesEditComponent');

    this.route.params.subscribe(params => {
      const recipeId = params['recipeId'];
      console.log(recipeId);

      if (recipeId) {
        this.recipeService.startEditing.next(recipeId);
        this.editMode = true;
        this.editedItem = this.recipeService.getRecipeById(recipeId);
        console.log(this.editedItem);

      }
    });

    this.initForm();

    this.subscription = this.recipeService.startEditing.subscribe(
      (recipeId: number) => {
        console.log('Received index:', recipeId);
        this.editedItemIndex = recipeId;
        this.editMode = true;
        this.editedItem = this.recipeService.getRecipeById(recipeId);
        console.log(this.editedItem);
        console.log('EditMode:', this.editMode);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private initForm() {
    let recipeName: string | null = null;
    let recipeImagePath: string | null = null;
    let recipeDescription: string | null = null;

    if (this.editMode && this.editedItem) {
      recipeName = this.editedItem.name || null;
      recipeImagePath = this.editedItem.imagePath || null;
      recipeDescription = this.editedItem.description || null;
      console.log('recipeNames:', recipeName);
      console.log('recipeImagePathsss:', recipeImagePath);
      console.log('recipeDescription:', recipeDescription);
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imagePath: new FormControl(recipeImagePath, Validators.required),
      description: new FormControl(recipeDescription, Validators.required)
    });
  }

  onSubmit(): void {
    console.log(this.recipeForm);
  }
}
