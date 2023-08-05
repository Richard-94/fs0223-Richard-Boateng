import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LinksInterceptor } from './links.interceptor';
import { HeaderComponent } from './header/header.component';
import { EventsComponent } from './events/events.component';
import { CreateComponent } from './create/create.component';
import { EventModificationService } from 'src/shared/event-modification.service';
import { AuthComponent } from './authenticate/auth/auth.component';
import { LoadingSpinningComponent } from './shared/loading-spinning/loading-spinning/loading-spinning.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EventsComponent,
    CreateComponent,
    AuthComponent,
    LoadingSpinningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbCarouselModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,
      useClass:LinksInterceptor,
      multi:true},
      EventModificationService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
