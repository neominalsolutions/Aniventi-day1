import { Component, OnInit } from '@angular/core';
import { verify } from 'crypto';
import { Observable } from 'rxjs';
import { Todo } from '../Todo';
import { TodoService } from '../todo.service';

@Component({
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {

  todos$!:Observable<Todo[]>;
  todos!:Todo[];

  constructor(private todoService:TodoService) { }

  promiseSample(){
     // Promise söz vermek => bir web sitesinden başka bir web sitesine veri isteği olduğu durumlarda kullanırız. sözü tutma eylemine resolve,sözü tutamaya reject diyoruz.

    // promise tanımlanma şekli asenkron haberleşmede kullanılır.
    // var promise = new Promise((resolve,reject)=>{
    //   return resolve({username:'ali'})
    // })


    // var promise1 = new Promise((resolve,reject)=>{
    //   return reject('sunucuda hata oluştu');
    // });


    // // çağrılma şekli
    // promise.then(data => {
    //   console.log('data', data)
    // }).catch(err => {
    //   console.log('err');
    // }).finally(()=> {
    //   alert('Promise 1 bitti')
    // })

    // promise1.then(data => {
    //   console.log('data')
    // }).catch(err => {
    //   console.log('err', err);
    // }).finally(()=> {
    //   alert('Promise 2 bitti')
    // })

  }

  ngOnInit(): void {

    this.promiseSample();
   

    this.todos$ = this.todoService.getTodos();

    this.todoService.getTodos().subscribe({
      
      next:(data)=> { // resolve söz tutuldu api dan data geldi
        //then
        this.todos = data;
      },
      error:(err)=>{ // network hatası oluştu reject oldu
        //catch
        console.log('hata', err);
      },
      complete:()=>{
        // finally
        // hata olsun yada olmasın yapılacak işlemler.
        // veri çekerken veri sayfaya yüklensede hata oluşsada loding spinner'ı hide etmek gibi
      }
    }
    )

  }

}
