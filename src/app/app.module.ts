import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserCreatePageComponent } from './user-create-page/user-create-page.component';

@NgModule({
  declarations: [	
    AppComponent,
    HomeComponent, // Component,Pipe,Directive yapısı
      AboutComponent, TodoPageComponent, TodoCardComponent, UserCreatePageComponent
   ],
  imports: [
    // 3rd parti npm den çekeceğimiz moduller
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [HttpClient], // service tanımları Injectable olmalı
  bootstrap: [AppComponent] 
})
export class AppModule { }
