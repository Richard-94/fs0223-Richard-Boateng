import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AllRecipesService } from '../all-recipes.service';

@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrls: ['./recipes-edit.component.scss']
})
export class RecipesEditComponent {
  recipeForm!:FormGroup
  id!:number
  editMode:boolean = false

  constructor(private recipeService:AllRecipesService){

  }


  private initForm(){

    let recipeName:string | undefined= '';
    let recipeImagePath:string | undefined = ''
    let recipeDescription:string | undefined = ''

    if(this.editMode){
      const recipe = this.recipeService.getRecipeById(this.id)
      recipeName = recipe.name
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description
    }

    this.recipeForm = new FormGroup({
      'name':new FormControl(recipeName),
      'imagePath':new FormControl(recipeImagePath),
      'description':new FormControl(recipeDescription)

    })
  }



}
