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
  newTodo:List = new List("", false, 0);
  inputError: boolean | undefined;

  constructor(private showTodo: TodoListService){}

  ngOnInit():void {
    this.getList();

  }

  getList() {
    this.showTodo.getList()
      .then(res => this.todos = res);
  }

  switchTask(todo:List):void{
    this.showTodo.switchTask(todo);
    const index = this.todos.findIndex(task => task.id === todo.id);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }

  elaborate(){
    if (this.newTodo.title.trim() === '') {
      this.inputError = false;
    }else {
      this.inputError = true;
    this.showTodo.showList(this.newTodo)
    .then(res => {
      console.log(res)
      this.newTodo = new List('', false, 0);
      this.getList()
      });
  }
  }

}
