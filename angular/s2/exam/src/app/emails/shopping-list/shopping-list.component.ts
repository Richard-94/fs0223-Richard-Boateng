import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients';
import { ShoppingListServiceService } from './shoppingList-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
ingredients:Ingredients[]=[]
private igChangeSub!:Subscription

constructor(private slService: ShoppingListServiceService){

}


ngOnInit(): void {
  this.ingredients = this.slService.getIngredients();
  this.igChangeSub=this.slService.ingredientsChanged.subscribe(
    (ingredients: Ingredients[]) => {
      this.ingredients = ingredients;
    }
  );
}

onEditItem(index: number){
  this.slService.startedEditing.next(index)

}

ngOnDestroy(): void {
  this.igChangeSub.unsubscribe
}


}
