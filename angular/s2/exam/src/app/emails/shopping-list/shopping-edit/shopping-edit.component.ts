import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { ShoppingListServiceService } from '../shoppingList-service.service';
import { Ingredients } from './../../../shared/ingredients';
import { Component, ElementRef, EventEmitter, Output, ViewChild, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm!:NgForm
  subscription!:Subscription;
  editMode:boolean=false
  editedItemIndex!:number;
  editedItem!:Ingredients;





 constructor(private slService: ShoppingListServiceService){}


  ngOnInit(): void { //ripopolare il form
    this.subscription = this.slService.startedEditing.
    subscribe(

      (index:number)=>{
        this.editedItemIndex=index;
        this.editMode = true;
        this.editedItem = this.slService.getIngredient(index);
        this.slForm.setValue({
          name:this.editedItem.name,
          amount:this.editedItem.amount
        })

      }
    )
  }

 onAddItem(form:NgForm){

  const value = form.value
  const newIngredient = new Ingredients(value.name,value.amount);
  if(this.editMode){
    this.slService.updateIngredient(this.editedItemIndex, newIngredient)
  }else{
    this.slService.addIngredient(newIngredient)
  }
  this.editMode = false
  form.reset()

 }

 ngOnDestroy(): void {
    this.subscription.unsubscribe()
 }


 onClear(){
  this.slForm.reset();
  this.editMode=false
 }

 onDeleted(){
  this.slService.deletedIngredient(this.editedItemIndex)
  this.onClear()
 }


}
