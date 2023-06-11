import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailsComponent } from './emails.component';
import { SignupComponent } from './signup/signup.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';

const routes: Routes = [
  { path: '', component: EmailsComponent },
  {path:'signup', component:SignupComponent},
  {path:'signin', component:SignInComponent},
  {path:'recipe', component:RecipesListComponent},
  {path:'shopping-list', component:ShoppingListComponent},
  {path:'recipe-details', component:RecipesDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailsRoutingModule { }
