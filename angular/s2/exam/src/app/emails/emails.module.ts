import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailsRoutingModule } from './emails-routing.module';
import { EmailsComponent } from './emails.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmailsComponent,
    SignInComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    EmailsRoutingModule,
    ReactiveFormsModule
  ]
})
export class EmailsModule { }
