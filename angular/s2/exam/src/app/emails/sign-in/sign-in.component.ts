import { Component } from '@angular/core';
import { Recipe } from '../recipes/recipe';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  recipes:Recipe []=[
    new Recipe('A test',' simple test', 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/one_pan_sausage_pasta_55251_16x9.jpg')
  ]
}
