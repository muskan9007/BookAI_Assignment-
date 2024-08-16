import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookAIAppModule } from './book-ai-app/book-ai-app.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,BookAIAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
