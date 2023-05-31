import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ActivePostComponent } from './pages/active-post/active-post.component';
import { NonActivePostComponent } from './pages/non-active-post/non-active-post.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"post_attivi",
    component:ActivePostComponent
  },

  {
    path:"non-active-post",
    component:NonActivePostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
