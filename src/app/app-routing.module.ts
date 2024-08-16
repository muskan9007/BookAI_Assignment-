import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './book-ai-app/home-page/home-page.component';

const routes: Routes = [
  // {
  //   path:'' , loadChildren: ()=> import('./book-ai-app/book-ai-app.module').then(m=>m.BookAIAppModule)
  // }
  {
    path:'' , component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
