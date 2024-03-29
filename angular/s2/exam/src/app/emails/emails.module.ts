import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailsRoutingModule } from './emails-routing.module';
import { EmailsComponent } from './emails.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule} from '@angular/forms';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { NgbCollapseModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AllRecipesService } from './service/all-recipes.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';




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
    NgbDropdownModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [AllRecipesService
   ],
})
export class EmailsModule { }
