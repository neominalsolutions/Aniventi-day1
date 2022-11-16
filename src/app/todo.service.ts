import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './Todo';




@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }

  // service içerisinde subscription yapılmaz.
  // servislere component içerisinden subscribe oluruz.
  getTodos():Observable<Todo[]>{
    // component içerisinde service subscribe oluruz.
    // rxjs denilen kütüphane ile bunu yapıyoruz
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }

  getTodoById(id:number):Observable<Todo>{
    // component içerisinde service subscribe oluruz.
    // rxjs denilen kütüphane ile bunu yapıyoruz
    return this.http.get<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }

  getTodoByTitle(title:string):Observable<Todo>{
    // component içerisinde service subscribe oluruz.
    // rxjs denilen kütüphane ile bunu yapıyoruz
    return this.http.get<Todo>(`https://jsonplaceholder.typicode.com/todos?title=${title}`);
  }
}
