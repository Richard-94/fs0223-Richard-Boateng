import { Component, OnInit, OnDestroy} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AllRecipesService } from '../all-recipes.service';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrls: ['./recipes-edit.component.scss']
})
export class RecipesEditComponent implements OnInit{

  recipeForm!: FormGroup;
  editMode = false;
  editedItemIndex!: number;
  editedItem: Recipe | undefined;

  subscription!:Subscription;

  constructor(private recipeService: AllRecipesService) {}
  ngOnInit(): void {
    console.log(this.recipeService.startEditing);
    console.log('Initializing RecipesEditComponent');

    this.initForm();

    this.subscription = this.recipeService.startEditing.subscribe((index: number) => {
      console.log('Received index:', index);
      this.editedItemIndex = index;
      this.editMode = true;
      this.editedItem = this.recipeService.getRecipeById(index);
      console.log(this.editedItem);
      console.log('EditMode:', this.editMode);
    });
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
