import { Component } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.scss']
})
export class RecipesDetailComponent {
  recipes:Recipe []=[
    new Recipe('A test','simple test', 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/one_pan_sausage_pasta_55251_16x9.jpg')
  ]


}
