import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListServiceService {
  ingredientsChanged = new EventEmitter<Ingredients[]>

  private ingredients:Ingredients[]=[
    new Ingredients('Apples',5)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }


  addIngredient(ingredient:Ingredients){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice())
  }

constructor() { }

}
