import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // class members

  // property
  title = 'Day1';
  data!:any[]; // public propery

  /**
   * servisler componentlerin constructor'ına inject olur.
   */
  constructor(private http:HttpClient) {


  }

  // method (eylem gerçekleştirir)
  onClick(){
    alert('Click');

    this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe((res:any) => {
      console.log('todos', res);
      this.data = res;
    })
  }
}

