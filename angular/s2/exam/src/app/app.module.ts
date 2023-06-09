import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailsModule } from './emails/emails.module';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllRecipesService } from './emails/service/all-recipes.service';




@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmailsModule,
    NgbModule,
    HttpClientModule,
    NgbCollapseModule,
    FormsModule,

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
