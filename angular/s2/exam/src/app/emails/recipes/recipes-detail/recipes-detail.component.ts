import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { AllRecipesService } from '../all-recipes.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.scss']
})
export class RecipesDetailComponent implements OnInit {
  recipe: Recipe | undefined;
  recipeForm!:FormGroup
  id!:number
  editMode:boolean = false

  constructor(
    private route: ActivatedRoute,
    private recipeService: AllRecipesService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const recipeId = Number(params.get('id'));
      this.recipe = this.recipeService.getRecipeById(recipeId);
      console.log(this.recipe)
      this.initForm()
    });
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
