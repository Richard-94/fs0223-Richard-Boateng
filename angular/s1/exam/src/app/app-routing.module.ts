import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CompletedComponent } from './pages/completed/completed.component';
import { TodoComponent } from './pages/todo/todo.component';
import { UpdateComponent } from './pages/update/update.component';


const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"completed",
    component:CompletedComponent
  },
  {
    path:"todo",
    component:TodoComponent
  },
  {
    path:'todo/update/:id',
    component:UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
