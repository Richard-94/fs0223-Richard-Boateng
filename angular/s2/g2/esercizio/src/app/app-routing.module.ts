import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TemplateDrivenComponent } from './pages/template-driven/template-driven.component';
import { ReactiveDrivenComponent } from './pages/reactive-driven/reactive-driven.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"template",
    component:TemplateDrivenComponent
  },
  {
    path:"reactive",
    component:ReactiveDrivenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
