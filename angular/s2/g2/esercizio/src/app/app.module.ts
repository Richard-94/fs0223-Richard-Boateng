import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { NavComponent } from './pages/header/nav/nav.component';
import { TemplateDrivenComponent } from './pages/template-driven/template-driven.component';
import { HomeComponent } from './pages/home/home.component';
import { ReactiveDrivenComponent } from './pages/reactive-driven/reactive-driven.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    TemplateDrivenComponent,
    HomeComponent,
    ReactiveDrivenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
