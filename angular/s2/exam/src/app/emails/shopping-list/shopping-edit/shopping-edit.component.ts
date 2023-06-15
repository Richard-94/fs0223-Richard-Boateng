import { ShoppingListServiceService } from '../shoppingList-service.service';
import { Ingredients } from './../../../shared/ingredients';
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent {

  @ViewChild('nameInput') nameInputRef!: ElementRef;
  @ViewChild('amountInput') amountInputRef!: ElementRef;




 constructor(private slService: ShoppingListServiceService){}

 onAddItem(){
  if(this.nameInputRef.nativeElement.value === '' &&  this.amountInputRef.nativeElement.value===''){
    return alert('')
  }
  const ingName = this.nameInputRef.nativeElement.value;
  const ingAmount = this.amountInputRef.nativeElement.value;
  const newIngredient = new Ingredients(ingName,ingAmount);
  this.slService.addIngredient(newIngredient)


  this.nameInputRef.nativeElement.value  = '';
  this.amountInputRef.nativeElement.value = ''
 }


}
