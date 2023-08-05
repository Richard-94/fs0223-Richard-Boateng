import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {
    path:"",
    component:HeaderComponent
  },

  {
    path:"create",
    component:CreateComponent
  },


  {
    path:"events",
    component:EventsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
