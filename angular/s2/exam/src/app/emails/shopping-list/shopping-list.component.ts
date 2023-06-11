import { Component, OnInit } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
ingredients:Ingredients[]=[
  new Ingredients('Apples', 5),
  new Ingredients('Tomatoes', 10),
]


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
