import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredients } from 'src/app/shared/ingredients';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListServiceService {
  ingredientsChanged = new Subject<Ingredients[]>
  startedEditing = new Subject<number>()//ripopolare il form

  private ingredients:Ingredients[]=[
    new Ingredients('Apples',5)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  getIngredient(index:number){
    return this.ingredients[index];
  }


  addIngredient(ingredient:Ingredients){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice())
  }

  updateIngredient(index:number, newIngredient:Ingredients){
    this.ingredients[index] = newIngredient
    this.ingredientsChanged.next(this.ingredients.slice())
  }

  deletedIngredient(index:number){
    this.ingredients.splice(index,1);
    this.ingredientsChanged.next(this.ingredients.slice())
  }

constructor() { }

}
