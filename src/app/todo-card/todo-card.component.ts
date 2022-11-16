import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../Todo';
import { TodoService } from '../todo.service';

@Component({
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit {

  todo!:Todo; // todo undefine tipinde

  constructor(private activatedRoute:ActivatedRoute, private todoService:TodoService) { }

  ngOnInit(): void {

    const param:any = this.activatedRoute.snapshot.params;

    const queryParam:any = this.activatedRoute.snapshot.queryParams;
    // bir sayfadan başka bir sayafaya atılan istek sonucu url üzerinden gönderilen parametrelere erişilebilir

    console.log('param', param);
    console.log('queryParam', queryParam);

    if(param.id){
      this.todoService.getTodoById(param.id).subscribe(data => {
        this.todo = data;
      });
    }

    if(queryParam.title){
      this.todoService.getTodoByTitle(queryParam.title).subscribe((data:any) => {
        this.todo = data[0];
      });
    }
    
  }

}
