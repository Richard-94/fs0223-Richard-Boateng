import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipes/recipe';
import { AllRecipesService } from '../service/all-recipes.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredients } from 'src/app/shared/ingredients';
import { DataStorageService } from 'src/app/shared/data-storage.service';

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
  @Output() recipeChanged = new EventEmitter<Recipe[]>();
  recipeIngredients!: FormArray;

  constructor(
    private route: ActivatedRoute,
    private recipeService: AllRecipesService,
    private router:Router,
    private recipeSvc:DataStorageService,

    private formBuilder: FormBuilder
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
        this.editedItemIndex = recipeId;
        this.editedItem = this.recipeService.getRecipeById(this.editedItemIndex);
        console.log(this.editedItem);
      }
    });

    this.initForm();

    this.subscription = this.recipeService.startEditing.subscribe((recipeId: number) => {
      console.log('Received index:', recipeId);
      this.editedItemIndex = recipeId;
      this.editMode = true;
      this.editedItem = this.recipeService.getRecipeById(recipeId);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private initForm() {
    let recipeName: string | null = null;
    let recipeImagePath: string | null = null;
    let recipeDescription: string | null = null;
    this.recipeIngredients = this.formBuilder.array([]);

    if (this.editedItem) {
      const recipeId = this.editedItemIndex;
      console.log(recipeId);

      const recipe = this.recipeService.getRecipeById(recipeId);
      console.log(recipe);

      recipeName = this.editedItem.name || null;
      recipeImagePath = this.editedItem.imagePath || null;
      recipeDescription = this.editedItem.description || null;
      console.log('recipeNames:', recipeName);
      console.log('recipeImagePathsss:', recipeImagePath);
      console.log('recipeDescription:', recipeDescription);
      if (recipe && recipe.ingredients) {
        for (let ingredient of recipe.ingredients) {
          const ingredientGroup = this.formBuilder.group({
            ingredients: [ingredient.name],
            amount: [ingredient.amount]
          });
          this.recipeIngredients.push(ingredientGroup);
          console.log(ingredientGroup);

        }
      }
    }

    this.recipeForm = this.formBuilder.group({
      name: [recipeName, Validators.required],
      imagePath: [recipeImagePath, Validators.required],
      description: [recipeDescription, Validators.required],
      ingredients: this.recipeIngredients
    });
  }

  onSubmit(): void {
    if (this.editMode) {
      this.recipeService.updateRecipe(this.editedItemIndex, this.recipeForm.value);
      alert('Recipe updated');
      console.log(this.recipeForm.value);
      this.recipeService.recipesChanged.next(this.recipeService.getRecipes()); // Emit the updated recipes

    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
      alert('Recipe created');
      this.recipeService.recipesChanged.next(this.recipeService.getRecipes()); // Emit the updated recipes
    }
    this.onCancel()
  }



  onAddIngredient() {
    const ingredientsFormArray = this.recipeForm.get('ingredients') as FormArray;
    ingredientsFormArray.push(
      this.formBuilder.group({
        ingredients: new FormControl(null, Validators.required),
        amount: new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    );
  }

  onCancel(){
    this.router.navigate(['/emails/recipe'], {relativeTo:this.route});
  }

  onSaveData(){
    this.recipeSvc.storeRecipes()
  }

  onFetchData(){
    this.recipeSvc.fetchRecipe()
  }

}
