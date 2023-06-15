import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailsRoutingModule } from './emails-routing.module';
import { EmailsComponent } from './emails.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

import { HeaderComponent } from './header/header.component';
import { NgbCollapseModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    EmailsComponent,
    SignInComponent,
    SignupComponent,
    RecipesComponent,
    RecipesDetailComponent,
    RecipesListComponent,
    ShoppingListComponent,
    ShoppingEditComponent,

    HeaderComponent
  ],
  imports: [
    CommonModule,
    EmailsRoutingModule,
    ReactiveFormsModule,
    NgbCollapseModule,
    NgbDropdownModule

  ]
})
export class EmailsModule { }
