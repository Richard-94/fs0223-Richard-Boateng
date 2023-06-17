import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailsComponent } from './emails.component';
import { SignupComponent } from './signup/signup.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { HeaderComponent } from './header/header.component';
import { RecipesEditComponent } from './recipes/recipes-edit/recipes-edit.component';

const routes: Routes = [
  { path: '', component: EmailsComponent },
  {path:'signup', component:SignupComponent},
  {path:'signin', component:SignInComponent},
  {path:'recipe', component:RecipesListComponent},
  {path:'shopping-list', component:ShoppingListComponent},
  {path:'recipe-details/:id', component:RecipesDetailComponent},
  {path:'header', component:HeaderComponent},
  { path: 'emails/header/:recipeId', component:HeaderComponent},
  // { path: 'recipe-edit', component: RecipesEditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailsRoutingModule { }
