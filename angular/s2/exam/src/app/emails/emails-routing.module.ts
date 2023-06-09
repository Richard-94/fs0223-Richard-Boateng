import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailsComponent } from './emails.component';
import { SignupComponent } from './signup/signup.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  { path: '', component: EmailsComponent },
  {path:'signup', component:SignupComponent},
  {path:'signin', component:SignInComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailsRoutingModule { }
