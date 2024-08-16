import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PricePageComponent } from './price-page/price-page.component';

const routes: Routes = [
  {
    path:'' , component:HomePageComponent
  },
  {
    path:'price' , component:PricePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookAIAppRoutingModule { }
