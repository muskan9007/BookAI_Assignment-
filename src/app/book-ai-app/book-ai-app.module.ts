import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookAIAppRoutingModule } from './book-ai-app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { PricePageComponent } from './price-page/price-page.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomePageComponent,
    PricePageComponent
  ],
  imports: [
    CommonModule,
    BookAIAppRoutingModule,ReactiveFormsModule
  ]
})
export class BookAIAppModule { }
