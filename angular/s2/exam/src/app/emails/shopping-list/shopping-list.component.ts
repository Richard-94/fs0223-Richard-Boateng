import { Component, OnInit } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
ingredients:Ingredients[]=[


]


  ngOnInit(): void {

  }

  onIngredientAdded(ingredient:Ingredients){
    this.ingredients.push(ingredient);


  }

}
