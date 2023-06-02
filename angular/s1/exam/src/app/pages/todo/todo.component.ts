import { Component } from '@angular/core';
import { List } from 'src/app/Models/list';
import { TodoListService } from 'src/app/todo-list.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  todos: List[] = [];
  newTodo:List = new List("", false);

  constructor(private showTodo: TodoListService){}

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.showTodo.getList()
      .then(res => this.todos = res);
  }

  elaborate(){
    this.showTodo.showList(this.newTodo)
    .then(res => {
      console.log(res)
      this.newTodo = new List('', false);
      this.getList()
      });
  }

}
