import { Component, OnInit } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients';
import { ShoppingListServiceService } from './shoppingList-service.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
ingredients:Ingredients[]=[]

constructor(private slService: ShoppingListServiceService){

}


ngOnInit(): void {
  this.ingredients = this.slService.getIngredients();
  this.slService.ingredientsChanged.subscribe(
    (ingredients: Ingredients[]) => {
      this.ingredients = ingredients;
    }
  );
}


}
