import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { TodoPageComponent } from './todo-page/todo-page.component';

// yönlendirme ayarları burada tanımlanıyor
const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'todos',
    component:TodoPageComponent
  },
  {
    path:'todo-detail/:id', //
    component:TodoCardComponent
  },
  {
    path:'todo-detail', //  querystringleri okumak için tanımladık
    component:TodoCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
